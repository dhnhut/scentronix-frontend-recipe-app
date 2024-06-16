import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import "./globals.css";
import Header from "./components/header";
import { Box, Container, Grid } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Recipe Website",
  description: "NextJS app using MUI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <AppRouterCacheProvider>
            <Header />
            <Container>
              {children}
            </Container>
          </AppRouterCacheProvider>
        </main>
      </body>
    </html>
  );
}
