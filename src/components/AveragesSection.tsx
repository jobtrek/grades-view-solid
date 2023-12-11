import { type Component } from 'solid-js'
import { allGrades } from '~/globalGradesStore'
import { AverageItem } from '~/components/AverageItem'

export const AveragesSection: Component = () => {
  return (
    <div class="grid grid-cols-1 gap-4">
      <section aria-labelledby="section-2-title">
        <h2 class="sr-only" id="section-2-title">
          Averages
        </h2>
        <div class="overflow-hidden rounded-lg bg-white shadow">
          <dl class="mx-auto grid grid-cols-1 gap-px bg-gray-900/5 sm:grid-cols-2 lg:grid-cols-2">
            <div
              class="col-span-2 flex flex-wrap items-baseline justify-between gap-x-2 gap-y-2 bg-white px-6 py-6">
              <dt class="text-sm font-medium leading-6 text-gray-500">
                Moyenne générale
              </dt>
              <dd class="text-xs font-medium text-green-600">+4.75%</dd>
              <dd
                class="w-full flex-none text-3xl font-bold leading-10 tracking-tight text-gray-900">
                5.5
              </dd>
            </div>
            <AverageItem grade={allGrades().maths} title="Mathématiques" />
            <div
              class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white px-6 py-6">
              <dt class="text-sm font-medium leading-6 text-gray-500">
                Société
              </dt>
              <dd class="text-xs font-medium text-red-700">-1.39%</dd>
              <dd
                class="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900">
                4.5
              </dd>
            </div>
            <div
              class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white px-6 py-6">
              <dt class="text-sm font-medium leading-6 text-gray-500">
                Anglais
              </dt>
              <dd class="text-xs font-medium text-green-600">+10.18%</dd>
              <dd
                class="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900">
                4.5
              </dd>
            </div>
            <div
              class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white px-6 py-6">
              <dt class="text-sm font-medium leading-6 text-gray-500">
                Informatique
              </dt>
              <dd class="text-xs font-medium text-green-600">+10.18%</dd>
              <dd
                class="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900">
                {allGrades().info}
              </dd>
            </div>
            <div
              class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white px-6 py-6">
              <dt class="text-sm font-medium leading-6 text-gray-500">
                Modules EPSIC
              </dt>
              <dd class="text-xs font-medium text-green-600">+10.18%</dd>
              <dd
                class="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900">
                4.5
              </dd>
            </div>
            <div
              class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white px-6 py-6">
              <dt class="text-sm font-medium leading-6 text-gray-500">
                Modules CIE
              </dt>
              <dd class="text-xs font-medium text-red-600">-10.18%</dd>
              <dd
                class="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900">
                4.5
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </div>
  )
}
