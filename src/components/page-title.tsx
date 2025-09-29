export default function PageTitle({ title, description }: { title: string, description?: string }) {
  return (
    <div className="font-light lg:w-1/2 space-y-2 text-center lg:text-start mb-6">
      <h1 className="text-5xl text-teal-500">{title}</h1>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  )
}

