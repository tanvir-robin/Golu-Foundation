import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'Golu Foundation - Building Better Tomorrow',
  description: 'A non-profit organization dedicated to transforming lives through quality education at Golu Biddaniketon and environmental conservation initiatives including tree plantation drives.',
  keywords: 'Golu Foundation, non-profit, education, Golu Biddaniketon, tree plantation, environmental conservation, community service',
  authors: [{ name: 'Golu Foundation' }],
  creator: 'Golu Foundation',
  publisher: 'Golu Foundation',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://golufoundation.org',
    title: 'Golu Foundation - Building Better Tomorrow',
    description: 'Empowering communities through education and environmental conservation',
    siteName: 'Golu Foundation',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Golu Foundation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Golu Foundation - Building Better Tomorrow',
    description: 'Empowering communities through education and environmental conservation',
    images: ['/twitter-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export const viewport = {
  themeColor: '#22c55e',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
