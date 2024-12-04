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
