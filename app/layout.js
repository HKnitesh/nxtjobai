import './globals.css'
import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nxt Job Ai',
  description: 'Ai application to build your resume',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='h-screen w-full' >{children}</body>
    </html>
  )
}
