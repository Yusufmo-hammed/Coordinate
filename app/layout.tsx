import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Coordinate-Converter',
  description: 'A professional application developed by Yusuf Mohammednur, designed for hassle-free coordinate conversion and easy location finding.',
  
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
