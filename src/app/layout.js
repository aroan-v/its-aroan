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
  title: 'My Portfolio',
  description: 'Turning ideas into interactive projects.',
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
