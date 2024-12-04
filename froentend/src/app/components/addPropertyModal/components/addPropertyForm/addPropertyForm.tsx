import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Controller, useForm } from "react-hook-form";

import { RootState } from "@/lib/store";
import { TextField } from "@mui/material";

import { PropertyType } from "@/app/components/property/property.types";

import { AddPropertyFormType } from "./addPropertyForm.types";
import {
  StyledAddPropertyForm,
  StyledAddPropertyFormWrapper,
  StyledAddPropertyInputWrapper,
  StyledButton,
  StyledError,
} from "./addPropertyForm.styles";

export const AddPropertyForm = ({
  isEdit,
  onSubmit,
  onEdit,
}: AddPropertyFormType) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const propertyInfo = useSelector(
    (state: RootState) => state.property.property as PropertyType
  );

  useEffect(() => {
    if (isEdit && propertyInfo) {
      reset({
        name: propertyInfo.name,
        price: propertyInfo.price.replace(/,/g, ""),
        location: propertyInfo.location,
      });
    }
  }, [isEdit, propertyInfo, reset]);

  return (
    <StyledAddPropertyFormWrapper>
      <StyledAddPropertyForm
        onSubmit={handleSubmit(isEdit ? onEdit : onSubmit)}
      >
        <StyledAddPropertyInputWrapper>
          <Controller
            name="name"
            control={control}
            rules={{ required: "Name is required" }}
            render={({ field }) => (
              <TextField
                {...field}
                variant="outlined"
                id="name"
                label="Property Name"
                placeholder="Enter property name"
                size="small"
              />
            )}
          />
          {errors.name && (
            <StyledError>{errors.name.message as string}</StyledError>
          )}
        </StyledAddPropertyInputWrapper>

        <StyledAddPropertyInputWrapper>
          <Controller
            name="price"
            control={control}
            rules={{ required: "Price is required" }}
            render={({ field }) => (
              <TextField
                {...field}
                type="number"
                variant="outlined"
                id="price"
                label="Property Price"
                placeholder="Enter property price"
                size="small"
              />
            )}
          />
          {errors.price && (
            <StyledError>{errors.price.message as string}</StyledError>
          )}
        </StyledAddPropertyInputWrapper>

        <StyledAddPropertyInputWrapper>
          <Controller
            name="location"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                variant="outlined"
                id="location"
                label="Property Location"
                placeholder="Enter property location"
                size="small"
              />
            )}
          />
        </StyledAddPropertyInputWrapper>

        <StyledButton variant="contained" type="submit">
          {isEdit ? "Edit" : "Add"}
        </StyledButton>
      </StyledAddPropertyForm>
    </StyledAddPropertyFormWrapper>
  );
};
