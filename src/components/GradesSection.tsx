import { type Component, createSignal, For, Index } from 'solid-js'
import { GradeElement } from '~/components/GradeElement'
import { Semester } from '~/components/Semester'
import { AddSemesterButton } from '~/components/AddSemesterButton'
import { createStore } from 'solid-js/store'

export const GradesSection: Component<{ name: string }> = (props) => {
  const [semesters, setSemester] = createStore<Array<number | null>>([])
  const addSemester = (): void => {
    setSemester(s => [...s, null])
  }
  const updateSemester = (index: number, average: number): void => {
    setSemester(index, average)
  }
  return (
    <div class="grid grid-cols-1 gap-4 lg:col-span-2">
        <section aria-labelledby="section-1-title">
            <h2 class="sr-only" id="section-1-title">
                {props.name}
            </h2>
            <div class="overflow-hidden rounded-lg bg-white shadow">
                <div class="p-6">
                    <div class="md:flex md:items-center md:justify-between">
                        <div class="min-w-0 flex-1">
                            <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                                {props.name}
                            </h2>
                        </div>
                        <div class="mt-4 flex md:ml-4 md:mt-0">
                            <GradeElement grade={5.5} class="font-bold text-lg px-3 py-1"/>
                        </div>
                    </div>
                    <div class="mt-6 border-t border-gray-100">
                        <dl class="divide-y divide-gray-100">
                            <Index each={semesters}>
                                {
                                  (semester, index) =>
                                    <Semester semesterGrade={semester()} updateSemesterGrade={(g: number) => { updateSemester(index, g) }}/>
                                }
                            </Index>
                            <AddSemesterButton addSemester={addSemester}/>
                        </dl>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
