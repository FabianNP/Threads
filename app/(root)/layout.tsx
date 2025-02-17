import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "../globals.css";

import Topbar from "@/components/shared/Topbar";
import LeftSidebar from "@/components/shared/LeftSidebar";
import RightSidebar from "@/components/shared/RightSidebar";
import Bottombar from "@/components/shared/Bottombar";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Threads",
  description: "A Next 13 Meta Threads Application"
}

export default function RootLayout({ children }: {children: React.ReactNode }) {

  return (
    <ClerkProvider afterSignOutUrl="/">
      <html lang="en">
"        <body className={`${inter.className} bg-dark-1`}>
          <Topbar />
          <main className="flex flex-ro">
            <LeftSidebar /> 

            <section className="main-container">
              <div className="w-full max-w-4xl">
                {children}
              </div>
            </section>

            <RightSidebar /> 
          </main>
          <Bottombar /> 
        </body>
      </html>
    </ClerkProvider>
  );
}
