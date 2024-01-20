import { type Component, For, Show } from "solid-js"
import { GradeElement } from "~/components/grades/GradeElement"
import { AddModuleForm } from "~/components/forms/AddModuleForm"
import {
  type Module,
  type ModuleWithGrade,
  type TechnicalDomains,
} from "~/types/models/GradeStoreModels"
import { TooltipContainer } from "~/components/utils/TooltipContainer"
import { useGradesContext } from "~/contexts/gradesContext/GradesContext"
import { addTechnicalModuleGrade } from "~/contexts/gradesContext/setterUtils/addTechnicalModuleGrade"
import { updateTechnicalModuleGrade } from "~/contexts/gradesContext/setterUtils/updateTechnicalModuleGrade"
import { removeTechnicalModuleGrade } from "~/contexts/gradesContext/setterUtils/removeTechnicalModuleGrade"
import { createTechnicalDomainAverageMemo } from "~/contexts/gradesContext/memoUtils/createTechnicalDomainAverageMemo"

interface Props {
  name: keyof TechnicalDomains
  title: string
  modules: Module[]
}

export const ModulesGradesSection: Component<Props> = (props) => {
  const [gradesStore] = useGradesContext()
  const addModule = (module: ModuleWithGrade): void => {
    if (
      gradesStore.info[props.name].find((m) => m.no === module.no) === undefined
    ) {
      addTechnicalModuleGrade(props.name, module)
    } else {
      updateTechnicalModuleGrade(props.name, module)
    }
  }

  const removeModule = (module: ModuleWithGrade): void => {
    removeTechnicalModuleGrade(props.name, module)
  }

  return (
    <section aria-labelledby="section-1-title">
      <h2 class="sr-only" id="section-1-title">
        {props.title}
      </h2>
      <div class="rounded-lg bg-white shadow">
        <div class="p-6">
          <div class="md:flex md:items-center md:justify-between">
            <div class="min-w-0 flex-1">
              <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                {props.title}
              </h2>
            </div>
            <div class="mt-4 flex md:ml-4 md:mt-0">
              <Show when={createTechnicalDomainAverageMemo(props.name)()}>
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
  )
}

export default ModulesGradesSection
