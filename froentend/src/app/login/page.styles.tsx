import styled from "styled-components";
import { Box } from "@mui/material";

export const StyledPageWrapper = styled.div`
  display: flex;
  height: calc(100vh - 65px);
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const LeftSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const StyledError = styled.div`
  color: red;
`;

export const RightSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

export const StyledFormContainer = styled(Box)`
  background-color: white;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 768px) {
    padding: 16px;
    max-width: 100%;
  }
`;

export const StyledForm = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
`;
