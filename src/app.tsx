// @refresh reload
import { Router } from "@solidjs/router"
import { FileRoutes } from "@solidjs/start"
import { type JSX, Suspense } from "solid-js"
import "./app.css"
import { AveragesSection } from "~/components/AveragesSection"
import { AppNavigation } from "~/components/AppNavigation"

export default function App(): JSX.Element {
  return (
    <Router
      root={(props) => (
        <>
          <div class="min-h-full">
            <AppNavigation />
            <main class="-mt-24 pb-8">
              <div class="container mx-auto sm:px-6 lg:px-8">
                <h1 class="sr-only">Grades calculator</h1>
                <div class="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8">
                  <Suspense>{props.children}</Suspense>
                  <AveragesSection />
                </div>
              </div>
            </main>
          </div>
        </>
      )}
    >
      <FileRoutes />
    </Router>
  )
}
