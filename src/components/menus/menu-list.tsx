import Link from "next/link";

export default function MenuList() {
  return (
    <nav className="flex flex-row items-center gap-4 uppercase font-semibold">
      <Link href={'/'}>Home</Link>
      <Link href={'/'}>News</Link>
      <Link href={'/'}>Jobs</Link>
      <Link href={'/'}>Directory</Link>
      <Link href={'/'}>Events</Link>
      <Link href={'/crime'}>Crime</Link>
      <Link href={'/contact'}>Contact</Link>
    </nav>
  )
}

