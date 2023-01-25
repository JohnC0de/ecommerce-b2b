import { A } from "solid-start"

export default function Navbar() {
  return (
    <nav class="flex items-center flex-wrap bg-gray-800 p-4 gap-4">
      <A
        href="/"
        class="text-white border-b-2 border-gray-800 font-semibold text-xl tracking-tight hover:text-teal-200  hover:border-teal-200"
      >
        E-Commerce B2B
      </A>
      <div class="flex gap-4">
        <A href="/login" class="text-teal-200 hover:text-white border-b-2 border-gray-800 hover:border-teal-200">
          Login
        </A>
      </div>
    </nav>
  )
}
