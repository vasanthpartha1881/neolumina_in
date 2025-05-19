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
                <a href="/" className="text-gray-600 hover:text-gray-900 flex items-center" title="Home">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <span className="ml-2">Home</span>
                </a>
                <div className="relative group">
                  <button className="text-gray-600 hover:text-gray-900 flex items-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span className="ml-2">Solutions</span>
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
                <a href="/about" className="text-gray-600 hover:text-gray-900 flex items-center" title="About Us">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="ml-2">About</span>
                </a>
                <a href="/contact" className="text-gray-600 hover:text-gray-900 flex items-center" title="Contact Us">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                  <span className="ml-2">Contact</span>
                </a>
              </div>
            </div>
          </div>
        </nav>
        {children}
        <footer className="bg-gradient-to-r from-[#7e2cfd] to-[#26bdf2] text-white pt-16 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="/" className="hover:text-gray-300 transition-colors">Home</a></li>
                  <li><a href="/solutions" className="hover:text-gray-300 transition-colors">Solutions</a></li>
                  <li><a href="/about" className="hover:text-gray-300 transition-colors">About Us</a></li>
                  <li><a href="/contact" className="hover:text-gray-300 transition-colors">Contact Us</a></li>
                </ul>
              </div>

              {/* Contact Us */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                <ul className="space-y-2">
                  <li><a href="/contact" className="hover:text-gray-300 transition-colors">Get in Touch</a></li>
                  <li><p className="text-sm">info@neolumina.in</p></li> {/* Placeholder email */}
                  <li><p className="text-sm">hello@neolumina.in</p></li>
                  <li><p className="text-sm">+91 7823920147</p></li>      {/* Placeholder phone */}
                </ul>
              </div>

              {/* Follow Us */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="hover:text-gray-300 transition-colors" title="Twitter">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.21 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"/>
                    </svg>
                  </a>
                  <a href="#" className="hover:text-gray-300 transition-colors" title="LinkedIn">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065s.919-2.065 2.063-2.065 2.064.926 2.064 2.065c0 1.139-.92 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                    </svg>
                  </a>
                  <a href="#" className="hover:text-gray-300 transition-colors" title="Facebook">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.407.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.099 2.796.143v3.24h-1.921c-1.5 0-1.792.715-1.792 1.763v2.313h3.59l-.465 3.63H16.56V24h6.115c.733 0 1.325-.593 1.325-1.324V1.324C24 .593 23.407 0 22.676 0z"/>
                    </svg>
                  </a>
                </div>
              </div>
              
              {/* Neolumina Info */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Neolumina Tech Solutions</h3>
                <p className="text-sm">
                  Illuminating the future through innovative technology solutions
                </p>
              </div>

            </div>
            <div className="text-center border-t border-white/20 pt-8 mt-8">
              <p>&copy; {new Date().getFullYear()} Neolumina Tech Solutions. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
