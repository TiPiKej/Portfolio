import Link from "next/link";

export default function Navbar() {
  return (
    <div className="text-3xl select-none fixed top-20 right-20 lg:right-52">
      <div>
        <Link href="/">
          <a className="hover:tracking-wider transition-all">Powrót</a>
        </Link>
      </div>
    </div>
  )
}
