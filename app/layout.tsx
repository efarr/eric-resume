import "./globals.css";
import type React from "react";
import { inter } from "@/lib/fonts";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata = {
  title: "Eric Farr | Chief Technology Officer",
  description: "Portfolio of Eric Farr, experienced CTO and technology leader",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

