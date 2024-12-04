import React, { useCallback, useEffect, useState } from "react";

import { useRouter } from "next/navigation";

import { HeaderContainer, Logo, UserButton } from "./header.styles";

export const Header = () => {
  const router = useRouter();

  const onHandleLogout = useCallback(() => {
    localStorage.removeItem("user");
    router.push("/login");
  }, []);

  return (
    <HeaderContainer>
      <Logo>PropVibe</Logo>
      <UserButton variant="outlined" onClick={onHandleLogout}>
        Logout
      </UserButton>
    </HeaderContainer>
  );
};
