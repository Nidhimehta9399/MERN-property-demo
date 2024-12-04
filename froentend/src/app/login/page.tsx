"use client";

import { useCallback, useEffect, useState } from "react";
import { Controller, FieldValues, useForm } from "react-hook-form";

import { Button, TextField, Typography } from "@mui/material";

import { useRouter } from "next/navigation";

import useAuth from "../hooks/useAuth";

import {
  LeftSection,
  RightSection,
  StyledFormContainer,
  StyledPageWrapper,
  StyledForm,
  StyledError,
} from "./page.styles";

export default function Login() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { isAuthenticated, isLoading } = useAuth();
  const [error, setError] = useState("");

  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated, isLoading, router]);

  const onSubmit = useCallback(async (data: FieldValues) => {
    try {
      const response = await fetch("http://localhost:8080/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (!response.ok) {
        setError(result.message);
        throw new Error("Network response was not ok");
      } else {
        localStorage.setItem("user", result.token);
        localStorage.setItem("user-role", result.role);
        router.push("/");
      }
    } catch (error: any) {
      console.log(error.message);
    }
  }, []);

  return (
    <StyledPageWrapper>
      <LeftSection>
        <img src="assets/login.avif" />
      </LeftSection>
      <RightSection>
        <StyledFormContainer>
          <Typography
            component="h1"
            variant="h5"
            align="center"
            color="primary"
            gutterBottom
          >
            Welcome Back!
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            align="center"
            style={{ marginBottom: "5px" }}
          >
            Please enter your credentials to access your account.
          </Typography>
          <StyledForm component="form" onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="email"
              control={control}
              rules={{ required: "Email is required" }}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="email"
                  error={!!errors.email}
                  helperText={errors.email?.message as string}
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              rules={{ required: "Password is required" }}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Password"
                  type="password"
                  error={!!errors.password}
                  helperText={errors.password?.message as string}
                />
              )}
            />
            <StyledError>{error}</StyledError>
            <Button type="submit" fullWidth variant="contained" color="primary">
              Login
            </Button>
          </StyledForm>
        </StyledFormContainer>
      </RightSection>
    </StyledPageWrapper>
  );
}
