// @refresh reload
import { Suspense } from "solid-js"
import { Body, ErrorBoundary, FileRoutes, Head, Html, Meta, Routes, Scripts, Title } from "solid-start"

import "@unocss/reset/tailwind.css"
import "virtual:uno.css"
import Navbar from "./components/Navbar"

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>E-Commerce B2B</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
            <div class="flex flex-col min-h-screen">
              <Navbar />
              <Routes>
                <FileRoutes />
              </Routes>
            </div>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  )
}
