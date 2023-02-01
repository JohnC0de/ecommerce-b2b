import { redirect } from "solid-start"
import {
  createHandler,
  Middleware,
  renderStream,
  StartServer
} from "solid-start/entry-server"

const protectedRoutesPaths = ["/protected"]

const protectRoutes: Middleware = ({ forward }) => {
  return async event => {
    if (protectedRoutesPaths.includes(new URL(event.request.url).pathname)) {
      // const user = await getUser(event.request)
      const user = false //TODO: implement getUser
      if (!user) return redirect("/")
    }
    return forward(event)
  }
}

const renderFn = () => renderStream(event => <StartServer event={event} />)

export default createHandler(protectRoutes, renderFn())
