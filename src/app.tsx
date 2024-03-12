// @refresh reload
import { Router } from "@solidjs/router"
import { FileRoutes } from "@solidjs/start/router"
import { type JSX, Suspense } from "solid-js"
import "./app.css"
import { AppNavigation } from "~/components/navigation/AppNavigation"
import { GradesProvider } from "~/contexts/gradesContext/GradesContext"
import { MetaProvider, Title } from "@solidjs/meta"

export default function App(): JSX.Element {
  return (
    <Router
      base="/grades-view-solid"
      root={(props) => (
        <MetaProvider>
          <Title>Calculateur de notes</Title>
          <div class="min-h-full">
            <GradesProvider>
              <AppNavigation />
              <main class="-mt-24 pb-8">
                <div class="container mx-auto sm:px-6 lg:px-8">
                  <h1 class="sr-only">Grades calculator</h1>
                  <Suspense>{props.children}</Suspense>
                </div>
              </main>
            </GradesProvider>
          </div>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  )
}
