import { Title } from "solid-start"
import { HttpStatusCode } from "solid-start/server"

export default function NotFound() {
  return (
    <main class="flex flex-col flex-1 items-center justify-center text-center">
      <Title>Page Not Found</Title>
      <HttpStatusCode code={404} />
      <div class="flex flex-col items-center gap-4">
        <h1 class="text-6xl font-bold">404 Error</h1>
        <p class="text-center text-xl text-gray-500 sm:w-96">
          Unfortunatly, this page could not be found or does not exist
        </p>
        <img src="/404.svg" alt="a illustration of a 404 error" class="w-96" />
      </div>
    </main>
  )
}
