import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";

import "./globals.css";
import Header from "./components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// info for metadata from the documentation https://nextjs.org/docs/app/api-reference/functions/generate-metadata
export const metadata: Metadata = {
  title: {
    default: `Jacob's website - Mrzozelow.xyz`,
    template: `%s | Jacob's website`,
  },
  description: "The personal website of Jacob Leenerts (known online as Mrzozelow), software developer and video game enthusiast.",
  applicationName: "Zoz Site",
  authors: [{name:"Jacob Leenerts"}],
  keywords: [`Mrzozelow`, `Jacob Leenerts`, `Gaming`, `Web Development`],
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script strategy="afterInteractive">
          {`
          // localStorage initialization code
          if (typeof window !== "undefined") {
            document.body.classList.add("dark");
            // create localStorage item if it doesn't exist
            if (!localStorage.getItem("isDark")) {
              if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
                localStorage.setItem("isDark", "true");
              }
              else {
                localStorage.setItem("isDark", "false");
              }
            }
            // and toggle dark theme if browser doesn't prefer dark
            document.body.classList.toggle("dark");
          }`}
        </Script>
        <Header />
        <main className="mx-auto min-h-full flex flex-col 
              xl:max-w-3/5 xl:min-w-lg px-3 whitespace-pre-line
              dark:bg-black dark:text-white">
          {children}
        </main>
      </body>
    </html>
  );
}
