import { type Component, Show } from "solid-js"
import { GradeContainer } from "~/components/GradeContainer"
import { GradeInput } from "~/components/GradeInput"
import { GradeElement } from "~/components/GradeElement"
import type { GeneralKnowledge } from "~/types/models/GradeStoreModels"
import { addGradeToGeneralKnowledgeSemester } from "~/contexts/gradesContext/setterUtils/addGradeToGeneralKnowledgeSemester"
import { removeGradeToGeneralKnowledgeSemester } from "~/contexts/gradesContext/setterUtils/removeGradeToGeneralKnowledgeSemester"
import { createGeneralKnowledgeSemesterAverageMemo } from "~/contexts/gradesContext/memoUtils/createGeneralKnowledgeSemesterAverageMemo"
import { useGradesContext } from "~/contexts/gradesContext/GradesContext"

interface Props {
  branchName: keyof GeneralKnowledge
  semesterIndex: number
}

export const Semester: Component<Props> = (props) => {
  const [gradesStore] = useGradesContext()
  const addGrade = (grade: number): void => {
    addGradeToGeneralKnowledgeSemester(
      props.branchName,
      props.semesterIndex,
      grade,
    )
  }
  const removeGrade = (index: number): void => {
    removeGradeToGeneralKnowledgeSemester(
      props.branchName,
      props.semesterIndex,
      index,
    )
  }

  return (
    <div class="px-4 py-6 sm:grid sm:grid-cols-5 sm:gap-4 sm:px-0">
      <dt class="text-sm font-medium text-gray-900 py-2">
        Semestre {props.semesterIndex + 1}
      </dt>
      <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-4 sm:mt-0 flex justify-between gap-x-1.5">
        <GradeContainer
          grades={
            gradesStore.generalKnowledge[props.branchName].semesters[
              props.semesterIndex
            ]
          }
          removeGradeTrigger={removeGrade}
        />
        <div class="flex">
          <GradeInput onNewGrade={addGrade} />
          <Show
            when={createGeneralKnowledgeSemesterAverageMemo(
              props.branchName,
              props.semesterIndex,
            )()}
          >
            {(grade) => (
              <GradeElement
                grade={grade()}
                class="font-bold text-sm px-2 py-2"
              />
            )}
          </Show>
        </div>
      </dd>
    </div>
  )
}
