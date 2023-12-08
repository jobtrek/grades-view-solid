import { type Component, createEffect, Show } from 'solid-js'
import { GradeContainer } from '~/components/GradeContainer'
import { GradeInput } from '~/components/GradeInput'
import { GradeElement } from '~/components/GradeElement'
import { createStore } from 'solid-js/store'

export const Semester: Component<{ semesterGrade: number | null, updateSemesterGrade: CallableFunction }> = (props) => {
  const [grades, gradesSetter] = createStore<number[]>([])

  createEffect(() => {
    if (grades.length < 1) return
    props.updateSemesterGrade(grades.reduce((v, a) => a + v) / grades.length)
  })
  const addGrade = (g: number): void => {
    gradesSetter(grades => [...grades, g])
  }
  return (
    <div class="px-4 py-6 sm:grid sm:grid-cols-5 sm:gap-4 sm:px-0">
      <dt class="text-sm font-medium text-gray-900 py-2">Semestre 1</dt>
      <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-4 sm:mt-0 flex justify-between gap-x-1.5">
        <GradeContainer grades={grades} />
        <div class="flex">
          <GradeInput onNewGrade={addGrade} />
          <Show when={props.semesterGrade}>
            <GradeElement grade={props.semesterGrade} class="font-bold text-sm px-2 py-2" />
          </Show>
        </div>
      </dd>
    </div>
  )
}
