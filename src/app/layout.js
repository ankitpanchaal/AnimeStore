import { NavBar } from '@/components/Navbar'
import './globals.css'
import { Poppins } from 'next/font/google'
import Footer from '@/components/Footer'
import { DataProvider } from '@/lib/AppContext'

const inter = Poppins({ subsets: ['latin'], weight: ["400", "500", "600", "700", "800", "900"], })

export const metadata = {
  title: 'ANIME STORE',
  description: 'Buy best quality anime printed t shirts',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DataProvider>
          <NavBar />
          {children}
          <Footer />
        </DataProvider>
      </body>
    </html>
  )
}
