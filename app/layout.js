import MainHeader from '@/components/main-header'
import './globals.css'

export const metadata = {
  title: 'Portfolio',
  description: 'Portfolio build in next',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  )
}
