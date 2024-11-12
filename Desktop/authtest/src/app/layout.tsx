import '@/styles/globals.css'
import Nav from "@/components/Nav"

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
      <body>
        <main className='app'>
          <Nav />
          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout
