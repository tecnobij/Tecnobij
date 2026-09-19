import type { Metadata } from "next";
import "./globals.css";
import "./brand.css";

export const metadata: Metadata = {
  title: "Tecnobij Solutions | Bespoke Software, Mobile Apps & Web Development",
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
    title: "Tecnobij Solutions | Bespoke Software & Mobile Apps",
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
    title: "Tecnobij Solutions | Bespoke Software & Mobile Apps",
    description: "Expert software services, mobile app development, and bespoke websites for your core business needs.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const whatsappUrl = "https://wa.me/917620638650?text=Hello!%20Tecnobij%20admin%20I%20am%20interested%20in%20your%20services!";

  return (
    <html lang="en">
      <body>
        {children}
        <div className="sticky-mobile-cta">
          <div className="sticky-mobile-cta-inner">
            <a href={whatsappUrl} className="sticky-whatsapp" aria-label="Chat on WhatsApp">WhatsApp</a>
            <a href="tel:+917620638650" className="sticky-call" aria-label="Call Us">Call</a>
            <a href="/estimate" className="sticky-quote" aria-label="Get a Quote">Get Quote</a>
          </div>
        </div>
      </body>
    </html>
  );
}
