"use client";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "@/lib/store";
import {
  deleteProperty,
  getProperty,
  getPropertyById,
} from "@/lib/reducer/PropertySlice";
import ChatIcon from "@/icons/chat";
import CloseIcon from "@/icons/close";

import { useRouter } from "next/navigation";

import useAuth from "./hooks/useAuth";

import Chat from "./chat/page";
import {
  ChatBody,
  ChatButton,
  ChatContainer,
  ChatHeader,
  ChatText,
  StyledButton,
  StyledHomePageWrapper,
  StyledPropertyList,
} from "./page.styles";
import { AddPropertyModal, Header, Property } from "./components";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const dispatch = useDispatch();
  const router = useRouter();
  const { isAuthenticated, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, isLoading, router]);

  const propertyList = useSelector(
    (state: RootState) => state.property.propertyList
  );

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8080/property", {
        method: "Get",
        headers: {
          authorization: `Bearer ${localStorage.getItem("user")}`,
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      dispatch(getProperty(result));
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const openModal = useCallback(() => {
    dispatch(getPropertyById({}));
    setEdit(false);
    setIsOpen(true);
  }, []);

  const handleModalClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleDeleteProperty = useCallback(async (id: number) => {
    try {
      const response = await fetch(`http://localhost:8080/property/${id}`, {
        method: "Delete",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("user")}`,
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      } else {
        const data = await response.json();
        dispatch(deleteProperty(data.data));
      }
    } catch (error: any) {
      console.log(error.message);
    }
  }, []);

  const handleGetPropertyForEdit = useCallback(async (id: number) => {
    try {
      const response = await fetch(`http://localhost:8080/property/${id}`, {
        method: "Post",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("user")}`,
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      } else {
        const data = await response.json();
        dispatch(getPropertyById(data.data));
        setIsOpen(true);
        setEdit(true);
      }
    } catch (error: any) {
      console.log(error.message);
    }
  }, []);

  return (
    <StyledHomePageWrapper>
      {localStorage.getItem("user") && <Header />}
      {localStorage.getItem("user-role") === "admin" && (
        <StyledButton variant="contained" onClick={openModal}>
          Add +
        </StyledButton>
      )}
      <StyledPropertyList>
        {propertyList.map(({ _id, name, price, location }, index) => (
          <Property
            key={`property-${index}`}
            _id={index}
            name={name}
            price={price}
            location={location}
            handleDelete={() => handleDeleteProperty(_id)}
            handleEdit={() => handleGetPropertyForEdit(_id)}
          />
        ))}
      </StyledPropertyList>

      <ChatButton onClick={toggleChat}>
        <ChatIcon size={24} />
      </ChatButton>
      {isChatOpen && (
        <ChatContainer>
          <ChatHeader>
            <ChatText>Chat</ChatText>
            <div onClick={toggleChat}>
              <CloseIcon className="close-icon" size={24} />
            </div>
          </ChatHeader>
          <ChatBody>
            <Chat />
          </ChatBody>
        </ChatContainer>
      )}

      {isOpen && (
        <AddPropertyModal
          open={isOpen}
          handleClose={handleModalClose}
          isEdit={edit}
        />
      )}
    </StyledHomePageWrapper>
  );
}
