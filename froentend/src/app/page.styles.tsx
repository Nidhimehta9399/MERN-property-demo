import styled from "styled-components";

import { Button } from "@mui/material";

export const StyledHomePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
`;

export const StyledPropertyList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(420px, 1fr));
  grid-row-gap: 30px;
  margin: 10px 0;
  place-items: center;
`;

export const StyledButton = styled(Button)`
  width: 150px;
  padding: 8px;
  margin-right: 30px;
  margin-top: 10px;
  border-radius: 4px;
  text-transform: capitalize;
  align-self: flex-end;
  cursor: pointer;
`;

export const ChatButton = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #28a745;
  color: white;
  padding: 10px 15px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  transition: background-color 0.3s ease;
`;

export const ChatContainer = styled.div`
  position: fixed;
  bottom: 70px;
  right: 20px;
  width: 300px;
  max-height: 400px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  z-index: 999;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: slide-up 0.3s ease-out;
`;

export const ChatHeader = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;

  .close-icon {
    cursor: pointer;
  }
`;

export const ChatText = styled.div`
  font-size: 1em;
`;

export const ChatBody = styled.div`
  padding: 10px;
  flex-grow: 1;
  overflow-y: auto;
  font-size: 14px;
  color: #333;
`;

export const slideUp = `
  @keyframes slide-up {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;
