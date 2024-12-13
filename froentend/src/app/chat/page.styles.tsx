import styled, { keyframes } from "styled-components";

export const ChatContainer = styled.div`
  font-family: "Arial, sans-serif";
  background-color: #fafafa;
`;

export const ChatBox = styled.div`
  min-height: 250px;
  overflow-y: auto;
  border-radius: 15px;
  padding: 15px;
  background-color: #fff;
`;

export const MessageWrapper = styled.div<{ sender: "user" | "bot" }>`
  display: flex;
  justify-content: ${(props) =>
    props.sender === "user" ? "flex-end" : "flex-start"};
  margin-bottom: 15px;
`;

export const MessageBubble = styled.div<{ sender: "user" | "bot" }>`
  max-width: 75%;
  padding: 10px 15px;
  border-radius: 20px;
  background-color: ${(props) =>
    props.sender === "user" ? "#3a86ff" : "#e3e3e3"};
  color: ${(props) => (props.sender === "user" ? "white" : "black")};
  font-size: 14px;
  word-wrap: break-word;
  line-height: 1.4;
`;

export const TypingIndicator = styled.div`
  text-align: left;
  font-style: italic;
  color: #888;
  margin-top: 10px;
  display: flex;
  align-items: center;
`;

export const DotWrapper = styled.div`
  display: flex;
  margin-left: 5px;
`;

const dotBounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-8px);
  }
  60% {
    transform: translateY(-4px);
  }
`;

export const DotLoading = styled.div`
  width: 8px;
  height: 8px;
  margin: 0 4px;
  background-color: #3a86ff;
  border-radius: 50%;
  animation: ${dotBounce} 1.2s infinite ease-in-out;
  &:nth-child(1) {
    animation-delay: 0s;
  }
  &:nth-child(2) {
    animation-delay: 0.2s;
  }
  &:nth-child(3) {
    animation-delay: 0.4s;
  }
`;

export const InputWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MessageInput = styled.input`
  padding: 12px 15px;
  width: 100%;
  border-radius: 25px;
  border: 1px solid #ccc;
  font-size: 14px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export const SendButton = styled.button`
  padding: 5px;
  border-radius: 5px;
  background-color: #fafafa;
  color: white;
  border: none;
  margin-left: 10px;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
`;
