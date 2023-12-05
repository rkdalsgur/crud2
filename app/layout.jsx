import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import { NextAuthProvider } from '@/components/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MongoDB CRUD',
  description: 'MongoDB, Tailwind CSS, Next-Auth',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
          <div className="max-w-5xl mx-auto p-4">
            <Navbar />
            <div className="mt-8">{children}</div>
          </div>
        </NextAuthProvider>
      </body>
    </html>
  )
}
