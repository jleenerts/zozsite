import type { Metadata } from "next";
import { Zen_Kaku_Gothic_New, Chakra_Petch, Blinker, Ubuntu_Mono, Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";

import "./globals.css";
import Header from "./components/Header";

const blinker = Blinker({
  variable: "--font-blinker",
  subsets: ["latin"],
  weight: "400",
});
const chakraPetch = Chakra_Petch({
  variable: "--font-chakra-petch",
  subsets: ["latin"],
  weight: "300",
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const ubuntuMono = Ubuntu_Mono({
  variable: "--font-ubuntu-mono",
  subsets: ["latin"],
  weight: "400",
});
const zenKaku = Zen_Kaku_Gothic_New({
  variable: "--font-zen-kaku-gothic-new",
  subsets: ["latin"],
  weight: "500",
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
      <head>
        <Script strategy="beforeInteractive">
          {`
          // localStorage initialization code
          if (typeof window !== "undefined") {
            // create localStorage item if it doesn't exist
            if (!localStorage.getItem("isDark")) {
              if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
                localStorage.setItem("isDark", "true");
              }
              else {
                localStorage.setItem("isDark", "false");
              }
            }
            
            // and finally set initial dark state if applicable
            if (localStorage.getItem("isDark") === "true") {
              document.body.classList.add("dark");
            }
          }`}
        </Script>
      </head>
      <body
        className={`${blinker.variable} ${chakraPetch.variable}
                    ${geistMono.variable} ${geistSans.variable}
                    ${ubuntuMono.variable} ${zenKaku.variable}
                    antialiased dark:bg-black dark:text-gray-200`}
        suppressHydrationWarning
      >
        <Header />
        <main className="
              mx-auto flex flex-col
              lg:max-w-1/2 lg:min-w-md px-3
              whitespace-pre-line
              duration-300
              ">
          {children}
        </main>
      </body>
    </html>
  );
}
