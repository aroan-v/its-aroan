import { Geist, Geist_Mono, Poppins, Pacifico, Yellowtail } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
  fallback: ['Arial', 'Helvetica', 'sans-serif'],
})

const pacifico = Pacifico({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-pacifico',
  display: 'swap',
  fallback: ['cursive'],
})

const yellowtail = Yellowtail({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-yellowtail',
  display: 'swap',
  fallback: ['Arial', 'Helvetica', 'sans-serif'],
})

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata = {
  title: 'Aroan | Junior Next.js Developer',
  description:
    'Turning ideas into projects through logical problem-solving, creative experimentation, and attention to detail. Builds modern, interactive applications on strong fundamentals.',
  openGraph: {
    title: 'Aroan | Junior Next.js Developer',
    description:
      'Turning ideas into projects through logical problem-solving, creative experimentation, and attention to detail. Builds modern, interactive applications on strong fundamentals.',
    url: 'https://its-aroan.vercel.app',
    siteName: "Aroan's Portfolio",
    images: [
      {
        url: 'https://its-aroan.vercel.app/link-preview.jpg',
        width: 1200,
        height: 630,
        alt: "Aroan's Portfolio Header",
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aroan | Junior Next.js Developer',
    description:
      'Turning ideas into projects through logical problem-solving, creative experimentation, and attention to detail.',
    images: ['https://its-aroan.vercel.app/link-preview.jpg'],
  },
  metadataBase: new URL('https://its-aroan.vercel.app'),
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${pacifico.variable} ${yellowtail.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="dark bg-black pb-10 font-sans">{children}</body>
    </html>
  )
}
