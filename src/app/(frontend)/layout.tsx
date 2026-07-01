import React from 'react'
import './styles.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ClientShell from '@/components/ClientShell'

export const metadata = {
  title: 'Hitayu – Transforming Business Through Technology',
  description:
    'Hitayu specializes in delivering impactful technology solutions — Cloud, AI, Cybersecurity, DevOps & Digital Transformation for enterprises.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </head>
      <body>
        {/* Scroll progress */}
        <div id="ht-spbar" />
        {/* Loader */}
        {/* <div id="ht-loader">
          <svg width="52" height="52" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="47" fill="rgba(0,200,232,0.07)" stroke="rgba(0,200,232,0.18)" strokeWidth="1.5" />
            <path d="M38 72C28 65 22 54 24 43C26 32 35 24 46 24C54 24 60 29 62 36" stroke="white" strokeWidth="7.5" strokeLinecap="round" fill="none" />
            <path d="M62 36C65 44 62 53 55 58C48 63 40 61 36 55" stroke="white" strokeWidth="6.5" strokeLinecap="round" fill="none" opacity=".8" />
            <path d="M60 22C68 26 72 35 70 44" stroke="white" strokeWidth="7" strokeLinecap="round" fill="none" />
            <path d="M20 62C30 54 48 50 66 40C76 34 82 28 80 22" stroke="url(#lgg)" strokeWidth="8.5" strokeLinecap="round" fill="none" />
            <defs>
              <linearGradient id="lgg" x1="20" y1="62" x2="80" y2="22">
                <stop offset="0%" stopColor="#0077AA" />
                <stop offset="55%" stopColor="#00C8E8" />
                <stop offset="100%" stopColor="#33D5EF" />
              </linearGradient>
            </defs>
          </svg>
          <div className="ht-ltxt">Loading Hitayu</div>
        </div> */}

        <ClientShell />
        <Navbar />

        {children}
        <Footer />

        {/* Back to top */}
        {/* <button id="ht-btt" aria-label="Back to top">
          <i className="fas fa-arrow-up" />
        </button> */}
      </body>
    </html>
  )
}
