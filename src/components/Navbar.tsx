import { A } from "solid-start"

export default function Navbar() {
  return (
    <nav class="flex items-center flex-wrap bg-gray-800 p-4 gap-4">
      <span class="text-white font-semibold text-xl tracking-tight">E-Commerce B2B</span>
      <div class="flex gap-4">
        <A href="/" class="text-teal-200 hover:text-white">
          Home
        </A>
        <A href="/login" class="text-teal-200 hover:text-white">
          Login
        </A>
      </div>
    </nav>
  )
}
