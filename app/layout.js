import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <nav>
          <div className="flex flex-col md:flex-row bg-blue-700 justify-evenly items-center h-12 min-w-full">
            <div className='hover:scale-105'>
              <Link href='/'>Main</Link>
            </div>
            <div className='hover:scale-105'>
              <Link href='/flotr2'>Flotr2</Link>
            </div>
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  )
}
