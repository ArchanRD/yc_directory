import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "easymde/dist/easymde.min.css";
import { Toaster } from "@/components/ui/toaster";
import NextTopLoader from "nextjs-toploader";

const workSans = localFont({
  src: [
    {
      path: "./fonts/WorkSans-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans-Thin.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans-ExtraLight.ttf",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-work-sans",
});

export const metadata: Metadata = {
  title: "Archan Dhrangadharia | Blogs",
  description: "I explore stuff and like to share my experiences with it!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${workSans.variable} ${workSans.variable} antialiased`}>
        <NextTopLoader color="#ee2b69" />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
