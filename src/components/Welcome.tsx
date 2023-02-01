import { createSignal, Show } from "solid-js"
import { user } from "~/context/user"

const [isCopied, setIsCopied] = createSignal(false)

function CopyButton() {
  return (
    <Show
      when={isCopied()}
      fallback={
        <button
          class="border rounded-lg text-sm px-2px shadow-2xl w-20 hover:bg-gray-200 hover:text-gray-700 bg-white shadow-inner"
          onClick={() => {
            navigator.clipboard.writeText(user()?.token || "")
            setIsCopied(true)
            setTimeout(() => {
              setIsCopied(false)
            }, 2000)
          }}
        >
          Copy Token
        </button>
      }
    >
      <button class="border border-white rounded-lg text-sm px-2px w-20 bg-green-500 text-white shadow-2xl">
        Copied!
      </button>
    </Show>
  )
}

export default function Welcome() {
  return (
    <div class="flex flex-col text-xl gap-2 truncate bg-gray-100 p-4 rounded-xl shadow-2xl text-gray-700">
      <p>Welcome, {user()?.nome}!</p>

      <div class="flex justify-between">
        <p>Your Token:</p>
        <CopyButton />
      </div>
      <textarea
        readOnly
        class="border rounded-xl font-thin font-mono h-17 text-sm tracking-tighter w-full p-1 overflow-ellipsis break-all whitespace-normal resize-none overflow-hidden"
      >
        {user()?.token}
      </textarea>
    </div>
  )
}
