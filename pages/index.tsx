import Head from 'next/head'
import Link from 'next/link'

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
      content: "Znane technologie",
      href: "/znane-technologie"
    },
  ]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 bg-zinc-900 lg:bg-gradient-to-r lg:from-zinc-900 lg:via-zinc-900 lg:to-red-900 min-h-screen">
      <div className="flex flex-col flex-nowrap text-sky-300 text-3xl sm:text-6xl 2xl:text-7xl space-y-8 items-center justify-center">
        {navigationData.map(n => (
          <Link href={n.href}>
            <a>{n.content}</a>
          </Link>
        ))}
      </div>
      {/* <div className="bg-origin-content p-10 bg-center bg-no-repeat bg-[url('https://picsum.photos/700/700')] brightness-50 rounded-full hidden lg:block"></div> */}
    </div>
  )
}
