import { Show } from "solid-js"
import { A } from "solid-start"
import MainContainer from "~/components/MainContainer"
import Welcome from "~/components/Welcome"
import { user } from "../context/user"

function NotLoggedIn() {
  return (
    <div class="flex flex-col text-center gap-2">
      <p class="text-center text-xl text-gray-500">You're not logged in!</p>
      <A
        href="/login"
        class="rounded-lg bg-blue-500 shadow-xl text-lg text-white py-2 px-4 hover:bg-blue-700"
      >
        Login
      </A>
    </div>
  )
}

export default function HomePage() {
  return (
    <MainContainer>
      <div class="flex flex-col tracking-tighter w-auto gap-4 items-center">
        <h1 class="font-bold text-6xl ">E-Commerce B2B</h1>
        <Show when={user()} fallback={<NotLoggedIn />}>
          <Welcome />
        </Show>
      </div>
    </MainContainer>
  )
}
