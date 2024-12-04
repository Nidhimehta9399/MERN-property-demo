import styled from "styled-components";

export const StyledPropertyWrapper = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  width: 400px;
  min-height: 150px;
  display: grid;
  grid-template-columns: 15fr 1fr;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    background-color: #e0eeff;
  }
`;

export const StyledImage = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 8px;
  transition: transform 0.3s ease;
`;

export const StyledPropertyName = styled.div`
  font-weight: bold;
  font-size: 1.2em;
  margin-top: 10px;
  color: #333;
  transition: color 0.3s ease;

  ${StyledPropertyWrapper}:hover & {
    color: #007bff;
  }
`;

export const StyledPropertyPrice = styled.div`
  font-size: 1.1em;
  margin-top: 5px;
  color: #555;
`;

export const StyledPropertyLocation = styled.div`
  font-size: 0.9em;
  margin-top: 5px;
  color: #777;
`;

export const StyledDeleteButton = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: end;
`;

export const StyledPropertyContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledActionButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;