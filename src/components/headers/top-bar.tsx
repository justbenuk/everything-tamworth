import Link from "next/link";
import PageContainer from "../page-container";
import { Badge } from "../ui/badge";
import { auth } from "@/auth";

export default async function Topbar() {
  const session = await auth()
  const todaysDate = new Date().toDateString()
  return (
    <div className="border-b py-2">
      <PageContainer>
        <div className="flex flex-row items-center justify-between">
          <div>
            <Badge variant={'outline'} className="bg-teal-500 text-white">{todaysDate}</Badge>
          </div>
          <div className="flex flex-row gap-4">
            {!session?.user ? (
              <>
                <Link href={'/register'}>Register</Link>
                <Link href={'/login'}>Login</Link>
              </>
            ) : session?.user.role === 'ADMIN' ? (
              <Link href={'/admin'}>Admin Panal</Link>
            ) : (
              <Link href={'/'}>Dashboard</Link>
            )}
          </div>
        </div>
      </PageContainer>
    </div>
  )
}

