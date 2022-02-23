import Navbar from './navbar'
// import Footer from './footer'
import type { AppProps } from 'next/app'

export default function Layout(props) {
  const { children, navigation } = props;
  
  return (
    <div className={`
    bg-black
    ${!navigation && "lg:bg-gradient-to-r lg:from-black lg:via-black lg:to-red-900"}
    min-h-screen`}>
      {navigation && <Navbar />}
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  )
}
