import Header from "@/components/header"

export default function NotFound() {
  return (
    <div className="flex flex-col justify-between px-6 2xl:px-0 min-h-screen">
      <Header />
      <main>
        <p>Not Found</p>
      </main>
      <footer>footer</footer>
    </div>
  );
}
