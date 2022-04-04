import Link from "next/link";

export default function Navbar() {
  return (
    <div className="text-3xl select-none h-24 flex justify-end items-end">
        <Link href="/">
          <a className="hover:tracking-wider transition-all">Powrót</a>
        </Link>
    </div>
  )
}
