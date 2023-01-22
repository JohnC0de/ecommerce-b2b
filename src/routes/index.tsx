import { Title } from "solid-start"

export default function Home() {
  return (
    <main>
      <Title>E-Commerce B2B</Title>
      <div class="flex flex-col items-center justify-center min-h-screen gap-4">
        <h1 class="text-6xl font-bold">E-Commerce B2B</h1>
        <div class="flex flex-col items-center gap-4">
          <p class="text-center text-xl text-gray-500 sm:w-96">Coming soon...</p>
          <a href="/login" class="text-lg p-4 text-white bg-blue-500 rounded-lg shadow-xl hover:bg-blue-700">
            Login
          </a>
        </div>
      </div>
    </main>
  )
}
