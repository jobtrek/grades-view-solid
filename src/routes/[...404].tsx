import { A } from "@solidjs/router"
import { type JSX } from "solid-js"
import { Title } from "@solidjs/meta"

export default function (): JSX.Element {
  return (
    <div class="grid grid-cols-1 items-start">
      <div class="grid grid-cols-1 gap-4">
        <section aria-labelledby="section-1-title">
          <div class="overflow-hidden rounded-lg bg-white shadow">
            <div class="px-6 py-12 text-center">
              <Title>404 - Not found</Title>
              <p class="text-base font-semibold text-blue-600">404</p>
              <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Page not found
              </h1>
              <p class="mt-6 text-base leading-7 text-gray-600">
                La page que vous recherchez n'existe pas.
              </p>
              <div class="mt-10 flex items-center justify-center gap-x-6">
                <A
                  href="/"
                  class="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Page d'accueil
                </A>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
