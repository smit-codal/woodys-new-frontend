import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Typography | Woody's",
  description: "This is woody's typography component",
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
        <main className="grow">{children}</main>
      </body>
    </html>
  );
}
