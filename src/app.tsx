// @refresh reload
import { Router } from "@solidjs/router"
import { FileRoutes } from "@solidjs/start"
import { type JSX, Suspense } from "solid-js"
import "./app.css"
import { AveragesSection } from "~/components/AveragesSection"
import { AppNavigation } from "~/components/AppNavigation"
import { GradesProvider } from "~/contexts/gradesContext/GradesContext"

export default function App(): JSX.Element {
  return (
    <Router
      base="/grades-view-solid"
      root={(props) => (
        <>
          <div class="min-h-full">
            <GradesProvider>
              <AppNavigation />
              <main class="-mt-24 pb-8">
                <div class="container mx-auto sm:px-6 lg:px-8">
                  <h1 class="sr-only">Grades calculator</h1>
                  {props.children}
                </div>
              </main>
            </GradesProvider>
          </div>
        </>
      )}
    >
      <FileRoutes />
    </Router>
  )
}
