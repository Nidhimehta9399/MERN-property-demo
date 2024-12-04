import styled from "styled-components";

import { Button } from "@mui/material";

export const HeaderContainer = styled.header`
  background-color: #282c34;
  padding: 10px 20px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Logo = styled.h1`
  height: 100pxs;
  width: 100px;
  margin: 0;
  font-size: 1.5rem;
  color: #61dafb;
`;

export const UserButton = styled(Button)`
  text-transform: capitalize;
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #61dafb;
    color: white;
  }
`;
