import { Index } from "solid-js"
import { A } from "solid-start"

export default function Navbar() {
  const pages = [
    { name: "Home", href: "/" },
    { name: "Login", href: "/login" },
    { name: "NotFound", href: "/123" },
    { name: "Products", href: "/products" }
  ]

  const navButtonStyle =
    "text-teal-200 hover:text-white border-b-2 border-gray-800 hover:border-teal-200 tracking-tight transition-all duration-200 ease-in-out hover:scale-125"

  return (
    <nav class="flex items-center flex-wrap bg-gray-800 p-4 gap-4">
      <A
        href="/"
        class="text-white border-b-2 border-gray-800 font-semibold text-xl tracking-tight hover:text-teal-200  hover:border-teal-200"
      >
        E-Commerce B2B
      </A>
      <div class="flex gap-4">
        <Index each={pages}>
          {(page, i) => (
            <A href={page().href} class={navButtonStyle}>
              {page().name}
            </A>
          )}
        </Index>
      </div>
    </nav>
  )
}
