import { type JSX } from "solid-js"

export default function (): JSX.Element {
  return (
    <div class="grid grid-cols-1 items-start">
      <div class="grid grid-cols-1 gap-4">
        <section aria-labelledby="section-1-title">
          <h2 class="sr-only" id="section-1-title">
            Grades calculator
          </h2>
          <div class="overflow-hidden rounded-lg bg-white shadow-sm">
            <div class="p-6">
              <div class="md:flex md:items-center md:justify-between">
                <div class="min-w-0 flex-1">
                  <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                    Grades calculator
                  </h2>
                </div>
              </div>
              <div class="mt-6 border-t border-gray-100">
                <p class="mt-2">
                  Bienvenue sur le calculateur de moyenne du CFC informatique en
                  dev d'application. Cliquez sur les onglets pour commencer à
                  calculer vos moyennes.
                </p>
                <p class="mt-2">
                  Ce site est une expérimentation, réalisée avec{" "}
                  <a
                    class="italic text-blue-600"
                    target="_blank"
                    href="https://www.solidjs.com"
                  >
                    solidjs
                  </a>
                  . N'hésitez pas à faire remonter les bugs sur Github.&nbsp;
                  <a
                    class="italic text-blue-600"
                    target="_blank"
                    href="https://github.com/jobtrek/grades-view-solid"
                  >
                    Dépot github du projet
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
