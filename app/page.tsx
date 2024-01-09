import { RandomFox } from "@/components/RandomFox"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>hola</h1>
      <RandomFox image={`https://randomfox.ca/images/${Math.floor(Math.random() * 122) + 1}.jpg`} />
    </main>
  )
}
