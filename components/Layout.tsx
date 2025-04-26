import React from "react";
import { Inter } from "next/font/google";
import Head from "next/head";
import Image from 'next/image';

interface LayoutProps {
  children: React.ReactNode;
  title: string;
}

const inter = Inter({ subsets: ["latin"] });

function Layout({ children, title }: LayoutProps) {
  return (
    <div className="bg-gradient-to-br from-teal-50 to-blue-50">
      <Head>
        <title>{title}</title>
        <meta name="favicon" />
      </Head>
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center ">
          <div className="flex items-center mb-4 md:mb-0 gap-x-2">
            {/* <Calculator className="h-6 w-6 text-teal-600 mr-2" /> */}
            <Image
                src={"/logoEC.png"}
                alt="Logo"
                width={50}
                height={50}
            />
            <h1 className="text-xl font-bold text-teal-600">
              EcoCalc: Analiza el Futuro del PIB
            </h1>
          </div>
        </div>
      </header>
      <main
        className={`min-h-screen container mx-auto px-4 py-8 flex-grow ${inter.className}`}
      >
        {children}
      </main>
    </div>
  );
}

export default Layout;
