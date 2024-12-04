"use client";
import { useCallback, useState } from "react";
import { Provider } from "react-redux";

import { Inter } from "next/font/google";
import { useRouter } from "next/navigation";

import store from "../lib/store";

import "./globals.css";
import { Header } from "./components";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  return (
    <Provider store={store}>
      <html lang="en">
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
          />
        </head>
        <body className={inter.className}>
          {children}
        </body>
      </html>
    </Provider>
  );
}
