import Image from "next/image";
import Link from "next/link";

export default function SiteTitle() {
  return (
    <Link href={'/'}>
      <Image src={'/assets/logo.png'} alt="Site Logo" width={40} height={40} className="rounded-full" />
    </Link>
  )
}

