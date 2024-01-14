import type { JSX } from "solid-js"

export default function Home(): JSX.Element {
  return (
    <div class="grid grid-cols-1 gap-4 lg:col-span-2">
      <section aria-labelledby="section-1-title">
        <h2 class="sr-only" id="section-1-title">
          Grades calculator
        </h2>
        <div class="overflow-hidden rounded-lg bg-white shadow">
          <div class="p-6">
            <div class="md:flex md:items-center md:justify-between mb-20">
              <div class="min-w-0 flex-1">
                <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                  Grades calculator
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
