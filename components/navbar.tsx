import Link from "next/link";

export default function Navbar() {
  return (
    <div className="text-3xl text-right my-16 select-none">
      <div>
        <Link href="/">
          <a className="hover:tracking-wider transition-all">Powrót</a>
        </Link>
      </div>
      
      {/* <div>
        <Link href="/api/hello">
          <a >Api hello</a>
        </Link>
      </div>
      
      <div>
        <Link href="/api/langs">
          <a >Api langs</a>
        </Link>
      </div>
      
      <div>
        <Link href="/api/pages">
          <a >Api pages</a>
        </Link>
      </div> */}
    </div>
  )
}
