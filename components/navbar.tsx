import Link from "next/link";

export default function Navbar() {
  return (
    <div className="text-primary text-8xl">
      <div>
        <Link href="/">
          <a >Navbar powrót</a>
        </Link>
      </div>
      
      <div>
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
      </div>
    </div>
  )
}
