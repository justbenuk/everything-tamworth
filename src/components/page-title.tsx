export default function PageTitle({ title, description }: { title: string, description?: string }) {
  return (
    <div className="border">
      <div className="p-2 font-semibold text-white bg-teal-500">{title}</div>
      <p className="p-2">{description}</p>
    </div>
  )
}

