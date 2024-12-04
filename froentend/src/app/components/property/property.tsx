import React from "react";

import { DeleteIcon, EditIcon } from "../../../icons/index";

import {
  StyledActionButtonWrapper,
  StyledDeleteButton,
  StyledImage,
  StyledPropertyContent,
  StyledPropertyLocation,
  StyledPropertyName,
  StyledPropertyPrice,
  StyledPropertyWrapper,
} from "./property.styles";
import { PropertyType } from "./property.types";

export const Property = ({
  _id,
  name,
  price,
  location,
  handleDelete,
  handleEdit,
}: PropertyType) => {
  return (
    <StyledPropertyWrapper>
      <StyledPropertyContent>
        <StyledImage src={`https://picsum.photos/${_id}00`} />

        <StyledPropertyName>{name}</StyledPropertyName>
        <StyledPropertyPrice>$ {price}</StyledPropertyPrice>
        <StyledPropertyLocation>Location : {location}</StyledPropertyLocation>
      </StyledPropertyContent>
      {localStorage.getItem("user-role") === "admin" && (
        <StyledActionButtonWrapper>
          <StyledDeleteButton onClick={handleEdit}>
            <EditIcon size={24} />
          </StyledDeleteButton>
          <StyledDeleteButton onClick={handleDelete}>
            <DeleteIcon size={24} />
          </StyledDeleteButton>
        </StyledActionButtonWrapper>
      )}
    </StyledPropertyWrapper>
  );
};
