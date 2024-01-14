import { type Component, createMemo, For, Show } from "solid-js"
import { GradeElement } from "~/components/GradeElement"
import { AddModuleForm } from "~/components/AddModuleForm"
import { roundTo } from "~/utils/roundTo"
import { average } from "~/utils/average"
import {
  type Module,
  type ModuleGrade,
  type TechnicalDomains,
} from "~/store/GradeStoreModels"
import {
  addTechnicalModuleGrade,
  gradesStore,
  removeTechnicalModuleGrade,
  updateTechnicalModuleGrade,
} from "~/store/gradeStore"
import { TooltipContainer } from "~/components/TooltipContainer"

interface Props {
  name: keyof TechnicalDomains
  title: string
  modules: Module[]
}

export const ModulesGradesSection: Component<Props> = (props) => {
  const addModule = (module: ModuleGrade): void => {
    if (
      gradesStore.info[props.name].find((m) => m.no === module.no) === undefined
    ) {
      addTechnicalModuleGrade(props.name, module)
    } else {
      updateTechnicalModuleGrade(props.name, module)
    }
  }

  const removeModule = (module: ModuleGrade): void => {
    removeTechnicalModuleGrade(props.name, module)
  }

  const branchGrade = createMemo(() => {
    const grades = gradesStore.info[props.name].map((m) => m.grade)
    return grades.length > 0 ? roundTo(average(grades), 10) : null
  })

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
                <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                  {props.title}
                </h2>
              </div>
              <div class="mt-4 flex md:ml-4 md:mt-0">
                <Show when={branchGrade()}>
                  {(grade) => (
                    <GradeElement
                      grade={grade()}
                      class="font-bold text-lg px-3 py-1"
                    />
                  )}
                </Show>
              </div>
            </div>
            <div class="mt-6 border-t border-gray-100">
              <dl class="divide-y divide-gray-100">
                <div class="px-4 py-6 gap-2 sm:px-0 flex flex-row flex-wrap">
                  <For
                    each={gradesStore.info[props.name]}
                    fallback={<p class="text-gray-500">Aucun module</p>}
                  >
                    {(grade) => (
                      <TooltipContainer
                        description={`${grade.no} - ${grade.description}`}
                      >
                        <GradeElement
                          grade={grade.grade}
                          class="font-medium text-sm px-2 py-2"
                          action={() => {
                            removeModule(grade)
                          }}
                        />
                      </TooltipContainer>
                    )}
                  </For>
                </div>
                <AddModuleForm
                  addModule={addModule}
                  availableModules={props.modules}
                />
              </dl>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
