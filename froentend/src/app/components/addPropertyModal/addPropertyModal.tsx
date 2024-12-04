import React, { useCallback } from "react";
import { FieldValues } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { Modal } from "@mui/material";
import CloseIcon from "@/icons/close";

import { addProperty, editProperty } from "@/lib/reducer/PropertySlice";
import { RootState } from "@/lib/store";

import { PropertyType } from "../property/property.types";

import { AddPropertyModalType } from "./addPropertyModal.types";
import {
  StyledAddPropertyModalBox,
  StyledAddPropertyModalWrapper,
  StyledCloseButton,
  StyledDivider,
  StyledModalContent,
  StyledModalTitle,
} from "./addPropertyModal.styles";
import { AddPropertyForm } from "./components";

export const AddPropertyModal = ({
  open,
  isEdit,
  handleClose,
}: AddPropertyModalType) => {
  const dispatch = useDispatch();

  const propertyInfo = useSelector(
    (state: RootState) => state.property.property as PropertyType
  );

  const handlePropertySubmit = useCallback(async (data: FieldValues) => {
    try {
      const response = await fetch("http://localhost:8080/property", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("user")}`,
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      } else {
        const result = await response.json();
        dispatch(addProperty(result.data));
      }
      handleClose();
    } catch (error: any) {
      console.log(error.message);
    }
  }, []);

  const handlePropertyEdit = useCallback(
    async (data: FieldValues) => {
      try {
        const response = await fetch(
          "http://localhost:8080/property/" + propertyInfo?._id,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${localStorage.getItem("user")}`,
            },
            body: JSON.stringify(data),
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        } else {
          const result = await response.json();
          dispatch(editProperty(result.data));
        }
        handleClose();
      } catch (error: any) {
        console.log(error.message);
      }
    },
    [propertyInfo]
  );

  return (
    <StyledAddPropertyModalWrapper>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <StyledAddPropertyModalBox>
          <StyledModalContent>
            <StyledModalTitle>Property Form</StyledModalTitle>
            <StyledCloseButton onClick={handleClose}>
              <CloseIcon size={24} color="#007bff" />
            </StyledCloseButton>
          </StyledModalContent>
          <StyledDivider />
          <AddPropertyForm
            onSubmit={handlePropertySubmit}
            onEdit={handlePropertyEdit}
            isEdit={isEdit}
          />
        </StyledAddPropertyModalBox>
      </Modal>
    </StyledAddPropertyModalWrapper>
  );
};
