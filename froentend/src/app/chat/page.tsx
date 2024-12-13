"use client";

import { useState } from "react";

import SendIcon from "@/icons/send";

import {
  ChatBox,
  ChatContainer,
  DotLoading,
  DotWrapper,
  InputWrapper,
  MessageBubble,
  MessageInput,
  MessageWrapper,
  SendButton,
  TypingIndicator,
} from "./page.styles";

interface ChatMessage {
  sender: "user" | "bot";
  message: string;
}

export default function Chat() {
  const [userMessage, setUserMessage] = useState<string>("");
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState<boolean>(false);

  const handleUserMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserMessage(e.target.value);
  };

  const sendMessage = async () => {
    if (!userMessage.trim()) return;

    // Add user's message to chat history
    const newUserMessage: ChatMessage = {
      sender: "user",
      message: userMessage,
    };
    setChatHistory((prevHistory) => [...prevHistory, newUserMessage]);
    setUserMessage("");

    setIsTyping(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await response.json();
      const newBotMessage: ChatMessage = {
        sender: "bot",
        message: data.response,
      };

      setChatHistory((prevHistory) => [...prevHistory, newBotMessage]);
      setIsTyping(false);
    } catch (error) {
      setChatHistory((prevHistory) => [
        ...prevHistory,
        {
          sender: "bot",
          message: "Sorry, there was an error with the chatbot.",
        },
      ]);
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <ChatContainer>
      <ChatBox>
        {chatHistory.map((msg, index) => (
          <MessageWrapper key={index} sender={msg.sender}>
            <MessageBubble sender={msg.sender}>
              {msg.sender === "bot" && <strong>Bot</strong>}
              <p>{msg.message}</p>
            </MessageBubble>
          </MessageWrapper>
        ))}
        {isTyping && (
          <TypingIndicator>
            <strong>Bot</strong>
            <DotWrapper>
              <DotLoading />
              <DotLoading />
              <DotLoading />
            </DotWrapper>
          </TypingIndicator>
        )}
      </ChatBox>
      <InputWrapper>
        <MessageInput
          type="text"
          value={userMessage}
          onChange={handleUserMessage}
          onKeyDown={handleKeyDown}
          placeholder="Type a message..."
        />
        <SendButton>
          <SendIcon onClick={sendMessage} size={24}/>
        </SendButton>
      </InputWrapper>
    </ChatContainer>
  );
}
