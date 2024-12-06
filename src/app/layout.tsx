'use client';

import { useEffect } from 'react';
import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Remove browser extension attributes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes') {
          const node = mutation.target as HTMLElement;
          if (node.getAttribute('data-text') !== null) {
            node.removeAttribute('data-text');
          }
        }
      });
    });

    observer.observe(document.body, {
      attributes: true,
      subtree: true,
      childList: true,
    });

    return () => observer.disconnect();
  }, []);

  return (
    <html lang="fr">
      <body className={`${inter.className} text-gray-900 antialiased min-h-screen flex flex-col bg-white`} suppressHydrationWarning>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
