import Navbar from './navbar'
// import Footer from './footer'
import type { AppProps } from 'next/app'

export default function Layout(props) {
  const { children, navigation } = props;
  
  return (
    <div className="
    bg-black
    md:bg-gradient-to-r
    md:from-black md:via-black md:to-red-900
    min-h-screen">
      {navigation && <Navbar />}
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  )
}
