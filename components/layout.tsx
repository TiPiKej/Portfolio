import Navbar from './navbar'
import type { AppProps } from 'next/app'

export default function Layout(props) {
  const { children, noNavigation } = props;
  
  return (
    <div className={`
    bg-black
    ${noNavigation && "lg:bg-gradient-to-r lg:from-black lg:via-black lg:to-red-900"}
    min-h-screen
    flex justify-center
    text-primary`}>
      <div className="w-3/4">
        {!noNavigation && <Navbar />}
        <main>{children}</main>
      </div>
    </div>
  )
}
