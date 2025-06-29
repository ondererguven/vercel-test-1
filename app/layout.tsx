import type React from "react"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // This layout is only used for the root redirect
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}


import './globals.css'

export const metadata = {
      generator: 'v0.dev'
    };
