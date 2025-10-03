import Link from "next/link";

export default function SiteTitle() {
  return (
    <Link href={'/'} className="flex flex-col items-center justify-center">
      <span className="text-4xl">Everything Tamworth</span>
      <span className="text-muted-foreground">Choose Local</span>
    </Link>
  )
}

