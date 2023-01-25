import { createSignal } from "solid-js"
import { UserAuthResponse } from "~/services/api"

export const [user, setUser] = createSignal<UserAuthResponse | null>(null)
