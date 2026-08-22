import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tejoraj & Sathvika",
  description: "We warmly invite you to be our honored guest at the celebration of our special day as we begin this beautiful journey together.",
  openGraph: {
    title: "Tejoraj & Sathvika",
    description: "We warmly invite you to be our honored guest at the celebration of our special day as we begin this beautiful journey together.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
