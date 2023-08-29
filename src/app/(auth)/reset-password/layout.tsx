import Header from "@/components/header";
import type { Metadata } from "next";

// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Reset Password",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/nvy8hpw.css" />
      </head>
      <body>
        <div id="wrapper">
          <Header />
          <main className="grow">{children}</main>
        </div>
      </body>
    </html>
  );
}
