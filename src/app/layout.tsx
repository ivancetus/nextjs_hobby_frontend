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
        <body
          className={`h-screen w-full flex flex-col items-center justify-center ${inter.className}`}
        >
          {children}
        </body>
      </GeneralContextProvider>
    </html>
  );
}
