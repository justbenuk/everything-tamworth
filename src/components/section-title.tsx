import { Separator } from "./ui/separator";

export default function SectionTitle({ title }: { title: string }) {
  return (
    <div className="flex flex-row items-center justify-center gap-2 py-2">
      <h1 className="text-teal-500 font-semibold uppercase">{title}</h1>
      <Separator className="bg-teal-500 flex-1" />
    </div>

  )
}

