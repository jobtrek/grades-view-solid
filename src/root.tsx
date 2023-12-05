// @refresh reload
import { type Component, Suspense } from 'solid-js'
import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Link,
  Meta,
  Routes,
  Scripts,
  Title
} from 'solid-start'
import './root.css'
import { AppNavigation } from '~/components/AppNavigation'
import { AveragesSection } from '~/components/AveragesSection'

export const Root: Component = () => {
  return (
    <Html lang="en" class="h-full bg-gray-100">
      <Head>
        <Title>Grades calculator - Solid JS</Title>
        <Meta charset="utf-8"/>
        <Meta name="viewport" content="width=device-width, initial-scale=1"/>
        <Link rel="stylesheet" href="https://rsms.me/inter/inter.css"/>
      </Head>
      <Body class="h-full">
        <Suspense>
          <ErrorBoundary>
            <div class="min-h-full">
              <AppNavigation/>
              <main class="-mt-24 pb-8">
                <div class="container mx-auto sm:px-6 lg:px-8">
                  <h1 class="sr-only">Grades calculator</h1>
                  <div class="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8">
                    <Routes>
                      <FileRoutes/>
                    </Routes>
                    <AveragesSection/>
                  </div>
                </div>
              </main>
            </div>
          </ErrorBoundary>
        </Suspense>
        <Scripts/>
      </Body>
    </Html>
  )
}

export default Root
