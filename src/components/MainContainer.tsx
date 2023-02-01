import { ParentProps } from "solid-js"

export default function MainContainer(props: ParentProps) {
  return (
    <main class="flex flex-1 items-center justify-center gap-4">
      {props.children}
    </main>
  )
}
