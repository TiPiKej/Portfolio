import Head from 'next/head'
import Link from 'next/link'
import type { ReactElement } from 'react'
import Layout from '../components/layout'

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
        items-center md:items-start justify-center
        text-primary
        text-6xl sm:text-8xl md:text-9xl
        font-bold
        space-y-8 min-h-screen md:px-16">
        {navigationData.map((n, i) => (
          <Link href={n.href} key={n.href}>
            <a className={`hover:tracking-wider transition-all ${!i && "text-secondary"}`}>{n.content}</a>
          </Link>
        ))}
      </div>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
