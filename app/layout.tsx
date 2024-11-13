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
          <div className="sticky top-0 left-0 right-0">
            <NavBar />
          </div>
          {children}
        </main>
      </body>
    </html>
  )
}