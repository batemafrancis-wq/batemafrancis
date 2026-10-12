import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://batema.dev/"),
  title: "BATEMA FRANCIS | Senior Full-Stack Developer & Founder | Kampala, Uganda",
  description:
    "Batema Francis — Senior full-stack developer & founder of Essence in Kampala, Uganda. 2+ years building websites, mobile & web apps: e-commerce, school management, restaurant, spa systems and more.",
  keywords: [
    "Batema Francis",
    "web developer Kampala",
    "Essence",
    "website design Uganda",
    "mobile apps Uganda",
    "full-stack developer",
    "e-commerce Uganda",
    "school management system",
  ],
  authors: [{ name: "Batema Francis" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://batema.dev/" },
  openGraph: {
    type: "website",
    title: "BATEMA FRANCIS | Senior Full-Stack Developer & Founder",
    description:
      "2+ years of expertise building websites, mobile & web apps that make an impact. Based at Latitude One Suites, Ntinda, Kampala.",
    images: [{ url: "/images/rubais.jpeg" }],
    url: "https://batema.dev/",
  },
  twitter: {
    card: "summary_large_image",
    title: "BATEMA FRANCIS | Senior Full-Stack Developer",
    description: "Websites, Mobile & Web Apps built to perfection — Kampala, Uganda.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}