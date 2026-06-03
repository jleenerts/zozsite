import type { Metadata } from "next";
import Script from "next/script";

import { Goldman } from "next/font/google";

import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ThemeWrapper from "./components/themeWrapper";

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
      <html lang="en" className="dark" suppressHydrationWarning>
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
                  if (localStorage.getItem("isDark") === "false") {
                  document.documentElement.classList.remove("dark");
                  }
               }`}
            </Script>
         </head>
         <body
            className={`${goldman.className}
                     antialiased h-dvh dark:bg-black dark:text-gray-200 z-0`}
            suppressHydrationWarning
         >
            <ThemeWrapper>
               <main className="
                     mx-auto portrait:mx-2 pt-12 lg:pt-5 pb-12 md:max-w-1/2 md:min-w-sm
                     flex flex-col justify-center
                     whitespace-pre-line
                     duration-300
               ">
                  {children}
               </main>
            </ThemeWrapper>
            <Header />
            <Footer />
         </body>
      </html>
   );
}
