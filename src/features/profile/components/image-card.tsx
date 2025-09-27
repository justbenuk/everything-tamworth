import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function ImageCard({ profileImage }: { profileImage?: string }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Profile Image</CardTitle>
      </CardHeader>
      <CardContent>
        <Image src={profileImage || '/assets/profile.png'} alt={'user profile picture'} width={300} height={300} className="h-56 w-auto" />
        <div className="mt-10">Image upload button</div>
      </CardContent>
    </Card>

  )
}

