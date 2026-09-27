import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ATLANTIC KIDS SCHOOL, Gwalior",
  description: "Official website of ATLANTIC KIDS SCHOOL, Shatabdipuram, Near Krishna Plaza, Gwalior",
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

