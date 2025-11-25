import './globals.css'
import { Bebas_Neue, Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MVST COFFEE CHALLANGE',
  description: 'Created by Yoana Stamenova',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

const bebasNeue = Bebas_Neue({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-bebas'
  })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={bebasNeue.variable}>
      <body className={`${inter.className} overflow-x-hidden bg-background-primary`}>
        <main className="overflow-x-hidden">
          {children}
        </main>
      </body>
    </html>
  )
}
