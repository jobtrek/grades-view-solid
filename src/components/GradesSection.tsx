import { Index, Show, type VoidComponent } from "solid-js"
import { GradeElement } from "~/components/grades/GradeElement"
import { Semester } from "~/components/Semester"
import { AddSemesterButton } from "~/components/AddSemesterButton"
import { type GeneralKnowledge } from "~/types/models/GradeStoreModels"
import { createGeneralKnowledgeBranchAverageMemo } from "~/contexts/gradesContext/memoUtils/createGeneralKnowledgeBranchAverageMemo"
import { addGeneralKnowledgeSemester } from "~/contexts/gradesContext/setterUtils/addGeneralKnowledgeSemester"
import { useGradesContext } from "~/contexts/gradesContext/GradesContext"
import { createGeneralKnowledgeBranchIsAvailableSemester } from "~/contexts/gradesContext/memoUtils/createGeneralKnowledgeBranchIsAvailableSemester"

interface Props {
  name: keyof GeneralKnowledge
  title: string
}

export const GradesSection: VoidComponent<Props> = (props) => {
  const [gradesStore] = useGradesContext()

  const addSemester = (): void => {
    addGeneralKnowledgeSemester(props.name)
  }
  return (
    <section aria-labelledby="section-1-title">
      <h2 class="sr-only" id="section-1-title">
        {props.title}
      </h2>
      <div class="overflow-hidden rounded-lg bg-white shadow-sm">
        <div class="p-6">
          <div class="md:flex md:items-center md:justify-between">
            <div class="min-w-0 flex-1">
              <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                {props.title}
              </h2>
            </div>
            <div class="mt-4 flex md:ml-4 md:mt-0">
              <Show
                when={createGeneralKnowledgeBranchAverageMemo(props.name)()}
              >
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
              <Index each={gradesStore.generalKnowledge[props.name].semesters}>
                {(semester, index) => (
                  <Semester branchName={props.name} semesterIndex={index} />
                )}
              </Index>
              <Show
                when={createGeneralKnowledgeBranchIsAvailableSemester(
                  props.name,
                )()}
              >
                <AddSemesterButton addSemester={addSemester} />
              </Show>
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GradesSection
