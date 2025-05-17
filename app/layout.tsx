import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

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
      { url: '/nts.png', type: 'image/png' },
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
        <link rel="icon" href="/nts.png" type="image/png" />
      </head>
      <body className="font-space-grotesk antialiased">
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <a href="/" className="flex items-center">
                  <img src="/nts.png" alt="Neolumina Tech Solutions" className="h-8 w-auto" />
                  <span className="ml-4 text-xl font-semibold text-gray-900 font-plus-jakarta">Neolumina Tech Solutions</span>
                </a>
              </div>
              <div className="flex items-center space-x-8">
                <a href="/" className="text-gray-600 hover:text-gray-900" title="Home">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </a>
                <div className="relative group">
                  <button className="text-gray-600 hover:text-gray-900 flex items-center">
                    Solutions
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-1">
                      <a href="/solutions/schul-ai" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Schul.ai</a>
                      <a href="/solutions/acme-platform" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">ACME</a>
                      <div className="py-2">
                        <a href="/solutions/it-infrastructure" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          IT Services
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <a href="/about" className="text-gray-600 hover:text-gray-900" title="About Us">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </a>
                <a href="/contact" className="text-gray-600 hover:text-gray-900" title="Contact Us">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                </a>
              </div>
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
      </body>
    </html>
  );
}
