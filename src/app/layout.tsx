import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Atlantic-1 School, Gwalior",
  description: "Official website of Atlantic-1 School, Shatabdipuram, Near Krishna Plaza, Gwalior",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

