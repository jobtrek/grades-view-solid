import { type Component } from 'solid-js'
import { GradeContainer } from '~/components/GradeContainer'
import { GradeInput } from '~/components/GradeInput'
import { GradeElement } from '~/components/GradeElement'

export const Semester: Component = () => {
  return (
    <div class="px-4 py-6 sm:grid sm:grid-cols-5 sm:gap-4 sm:px-0">
      <dt class="text-sm font-medium text-gray-900 py-2">Semestre 1</dt>
      <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-4 sm:mt-0 flex justify-between gap-x-1.5">
        <GradeContainer />
        <div class="flex">
          <GradeInput />
          <GradeElement grade={5} class="font-bold text-sm px-2 py-2" />
        </div>
      </dd>
    </div>
  )
}
