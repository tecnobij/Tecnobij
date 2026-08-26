import type { Metadata } from "next";
import "./globals.css";
import "./brand.css";

export const metadata: Metadata = {
  title: "Tecnobij Solutions | Bespoke software, built for momentum",
  description:
    "Tecnobij Solutions builds bespoke web and mobile applications for organizations, institutions and ambitious SMEs.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
