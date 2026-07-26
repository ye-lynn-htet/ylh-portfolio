import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ye Lynn Htet — Senior Mobile Developer",
  description: "Senior Mobile Developer crafting high-performance iOS and Flutter applications. Based in Kobe, Japan.",
};

// GoatCounter analytics (privacy-friendly, no cookies)
const GOATCOUNTER_CODE = process.env.NEXT_PUBLIC_GOATCOUNTER_CODE || "";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        {GOATCOUNTER_CODE && (
          <script
            data-goatcounter={`https://${GOATCOUNTER_CODE}.goatcounter.com/count`}
            async
            src="//gc.zgo.at/count.js"
          />
        )}
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
