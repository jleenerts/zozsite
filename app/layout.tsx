import type { Metadata } from "next";
import { Goldman, Zen_Kaku_Gothic_New } from "next/font/google";
import Script from "next/script";

import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const zenKaku = Zen_Kaku_Gothic_New({
  variable: "--font-zen-kaku-gothic-new",
  subsets: ["latin"],
  weight: "500",
});
const goldman = Goldman({
  variable: "--font-goldman",
  subsets: ["latin"],
  weight: "400",
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
        <Script strategy="afterInteractive">
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
        className={`${goldman.className}
                    antialiased dark:bg-black dark:text-gray-200 z-0`}
        suppressHydrationWarning
      >
        
        <main className="
              mx-auto pt-13 lg:pt-5 pb-12
              flex flex-col lg:max-w-1/2 lg:min-w-md
              whitespace-pre-line
              duration-300
        ">
          {children}
          
        </main>
        
        <Header />
        <Footer />
      </body>
    </html>
  );
}
