import Head from 'next/head'
import Link from 'next/link'
import type { ReactElement } from 'react'
import Layout from '../components/Layout'

interface NavigationStruct {
  content: string,
  href: string,
}

export default function Home() {
  const navigationData: NavigationStruct[] = [
    {
      content: "O mnie",
      href: "/o-mnie"
    },
    {
      content: "Praca",
      href: "/praca"
    },
    {
      content: "Kontakt",
      href: "/kontakt"
    },
  ]

  return (
    <div className="
      flex flex-col
      items-center lg:items-start justify-center
      text-5xl xs:text-7xl md:text-9xl
      font-bold
      min-h-screen
      select-none">
      {navigationData.map((n, i) => (
        <Link href={n.href} key={n.href}>
          <a className={`
            hover:tracking-wider transition-all min-w-full lg:min-w-min text-center
            py-5
            ${i && "text-secondary"}
            `}>
              {n.content}
          </a>
        </Link>
      ))}
    </div>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout noNavigation>
      {page}
    </Layout>
  )
}
