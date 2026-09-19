import type { Metadata } from "next";
import "./globals.css";
import "./brand.css";

export const metadata: Metadata = {
  title: "Tecnobij Solutions | Custom Software, Mobile Apps & Web Development",
  description:
    "Tecnobij Solutions builds bespoke web applications, mobile apps, and custom business software for organizations, institutions, and ambitious SMEs. Elevate your core business processes.",
  keywords: [
    "Software Services",
    "Mobile App Development",
    "Website Development",
    "Custom Software",
    "Business Core Solutions",
    "Bespoke Software",
    "Tecnobij Solutions"
  ],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Tecnobij Solutions | Custom Software & Mobile Apps",
    description: "Expert software services, mobile app development, and bespoke websites for your core business needs.",
    url: "https://tecnobij-wine.vercel.app", // Ensure this points to the active domain
    siteName: "Tecnobij Solutions",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Tecnobij Solutions Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tecnobij Solutions | Custom Software & Mobile Apps",
    description: "Expert software services, mobile app development, and bespoke websites for your core business needs.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
