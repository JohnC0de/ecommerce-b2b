import { A, Title } from "solid-start"

export default function Home() {
  return (
    <div class="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 class="text-6xl font-bold">E-Commerce B2B</h1>
      <div class="flex flex-col items-center gap-4">
        <p class="text-center text-xl text-gray-500 sm:w-96">Coming soon...</p>
        <A href="/login" class="px-4 py-2 text-lg text-white bg-blue-500 rounded-lg shadow-xl hover:bg-blue-700">
          Login
        </A>
      </div>
    </div>
  )
}
