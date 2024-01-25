import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import {ReduxProvider} from "@/redux/provider";
import {TanstackProvider} from "@/common/TanstackProvider";
import NavBar from "@/common/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TanStack & Redux",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <NavBar/>
      <TanstackProvider>
          <ReduxProvider Children={children} />
      </TanstackProvider>
      </body>
    </html>
  );
}