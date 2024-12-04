import styled from "styled-components";

import { Box } from "@mui/material";

export const StyledAddPropertyModalWrapper = styled.div``;

export const StyledAddPropertyModalBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
`;

export const StyledModalContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;

export const StyledModalTitle = styled.div`
  font-size: 18px;
  font-weight: 500;
  font-family: "Roboto";
`;

export const StyledCloseButton = styled.div`
  cursor: pointer;
`;

export const StyledDivider = styled.div`
  border-bottom: 1px solid #868886;
  margin-bottom: 10px;
`;
