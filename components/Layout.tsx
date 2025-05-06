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
  const navItems = [
    { name: "Inicio", href: "/" },
    { name: "Teoría", href: "/theory" },
    { name: "Cómo funciona", href: "/how-it-works" },
  ]

  return (
    <div className="bg-gradient-to-br from-teal-50 to-blue-50">
      <Head>
        <title>{title}</title>
        <meta name="favicon" />
      </Head>
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center ">
          <div className="flex items-center mb-4 md:mb-0 gap-x-2">
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
          <nav>
            <ul className="flex space-x-4 text-gray-700 font-medium">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="hover:text-teal-600 transition duration-200 text-teal-700 font-medium"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
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
