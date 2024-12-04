import styled from "styled-components";

import { Button } from "@mui/material";

export const StyledAddPropertyFormWrapper = styled.div``;

export const StyledAddPropertyForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const StyledAddPropertyInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const StyledError = styled.div`
  font-size: 12px;
  font-weight: 700;
  font-family: "Roboto";
  color: #e75e5e;
`;

export const StyledButton = styled(Button)`
  width: 150px;
  padding: 8px;
  border-radius: 4px;
  align-self: flex-end;
  cursor: pointer;
`;
