import { type Component, For, Show } from 'solid-js'
import { createStore, type Part } from 'solid-js/store'
import type { Grades } from '~/globalGradesStore'
import { type Module, type ModuleGrade } from '~/types/Module'
import { GradeElement } from '~/components/GradeElement'
import { AddModuleForm } from '~/components/AddModuleForm'
import { roundTo } from '~/utils/roundTo'
import { average } from '~/utils/average'

interface Props {
  name: Part<Grades>
  title: string
  modules: Module[]
}
export const ModulesGradesSection: Component<Props> = (props) => {
  const [modulesGrades, setModulesGrades] = createStore<ModuleGrade[]>([])

  const addModule = (module: ModuleGrade): void => {
    if (modulesGrades.find(m => m.no === module.no) === undefined) {
      setModulesGrades(m => [...m, module])
    } else {
      setModulesGrades(m => m.no === module.no, { grade: module.grade })
    }
  }

  const branchGrade = (): number | null => {
    const grades = modulesGrades.map(m => m.grade).filter(v => v !== null)
    return grades.length > 0 ? roundTo(average(grades)) : null
  }

  return (
    <div class="grid grid-cols-1 gap-4 lg:col-span-2">
      <section aria-labelledby="section-1-title">
        <h2 class="sr-only" id="section-1-title">
          {props.title}
        </h2>
        <div class="overflow-hidden rounded-lg bg-white shadow">
          <div class="p-6">
            <div class="md:flex md:items-center md:justify-between">
              <div class="min-w-0 flex-1">
                <h2
                  class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                  {props.title}
                </h2>
              </div>
              <div class="mt-4 flex md:ml-4 md:mt-0">
                <Show when={branchGrade()}>
                  {grade => <GradeElement grade={grade()} class="font-bold text-lg px-3 py-1"/>}
                </Show>
              </div>
            </div>
            <div class="mt-6 border-t border-gray-100">
              <dl class="divide-y divide-gray-100">
                <div class="px-4 py-6 gap-2 sm:px-0 flex flex-row flex-wrap">
                  <For each={modulesGrades} fallback={<p class="text-gray-500">Aucun module</p>}>
                    {grade => <GradeElement grade={grade.grade} class="font-medium text-sm px-2 py-2" />}
                  </For>
                </div>
                <AddModuleForm addModule={addModule} availableModules={props.modules} />
              </dl>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
