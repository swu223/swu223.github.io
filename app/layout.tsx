import './global.css'
import type { Metadata } from "next";
import NavBar from "./ui/navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return(
    <html lang="en">
      <body>
        <main className="">
            <NavBar />

          {children}
        </main>
      </body>
    </html>
  )
}