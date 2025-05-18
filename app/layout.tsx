import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";
import { useState } from "react";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-plus-jakarta',
  weight: ['400', '500', '600', '700'],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-space-grotesk',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: "Neolumina Tech Solutions",
  description: "Innovative technology solutions for your business needs",
  icons: {
    icon: [
      { url: '/neolumina_in/nts.png', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="icon" href="/neolumina_in/nts.png" type="image/png" />
      </head>
      <body className="font-space-grotesk antialiased">
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link href="/" className="flex items-center">
                  <Image src="/neolumina_in/nts.png" alt="Neolumina Tech Solutions" width={32} height={32} className="h-8 w-auto" />
                  <span className="ml-2 text-xl font-bold text-gray-900">Neolumina</span>
                </Link>
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <Link href="/" className="text-gray-600 hover:text-gray-900 flex items-center space-x-2" title="Home">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <span>Home</span>
                </Link>
                <Link href="/solutions" className="text-gray-600 hover:text-gray-900 flex items-center space-x-2" title="Our Solutions">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span>Solutions</span>
                </Link>
                <Link href="/about" className="text-gray-600 hover:text-gray-900 flex items-center space-x-2" title="About Us">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>About</span>
                </Link>
                <Link href="/contact" className="text-gray-600 hover:text-gray-900 flex items-center space-x-2" title="Contact Us">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                  <span>Contact</span>
                </Link>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center">
                <button
                  type="button"
                  className="mobile-menu-button inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <div className="md:hidden hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/" className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
                Home
              </Link>
              <Link href="/solutions" className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
                Solutions
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
                About
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
                Contact
              </Link>
            </div>
          </div>
        </nav>
        {children}
        <footer className="bg-gradient-to-r from-[#7e2cfd] to-[#26bdf2] text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p>&copy; {new Date().getFullYear()} Neolumina Tech Solutions. All rights reserved.</p>
            </div>
          </div>
        </footer>

        {/* Mobile menu JavaScript */}
        <script dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('DOMContentLoaded', function() {
              const mobileMenuButton = document.querySelector('.mobile-menu-button');
              const mobileMenu = document.getElementById('mobile-menu');
              
              mobileMenuButton.addEventListener('click', function() {
                mobileMenu.classList.toggle('hidden');
              });
            });
          `
        }} />
      </body>
    </html>
  );
}
