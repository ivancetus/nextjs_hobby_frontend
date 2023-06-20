import "./globals.css";
import { Inter } from "next/font/google";
import GeneralContextProvider from "@/context/GeneralContextProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Youtube Download",
  description: "NextJS & Flask API",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GeneralContextProvider>
        {/*<body*/}
        {/*  className={`h-screen w-full flex flex-col items-center justify-center ${inter.className}`}*/}
        {/*>*/}
        <body className={`relative antialiased ${inter.className}`}>
          <main className="relative w-full min-h-screen flex flex-col justify-center bg-slate-950 overflow-hidden">
            <div className="w-1/3 mx-auto md:px-24 md:w-full xs:px-6 py-24">
              {children}
            </div>
          </main>
        </body>
      </GeneralContextProvider>
    </html>
  );
}
