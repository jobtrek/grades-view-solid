import type { TechnicalDomains } from "~/types/models/GradeStoreModels"
import { type Accessor, createMemo } from "solid-js"
import { roundTo } from "~/utils/roundTo"
import { average } from "~/utils/average"
import { useGradesContext } from "~/contexts/gradesContext/GradesContext"

const [gradesStore] = useGradesContext()
export const createTechnicalDomainAverageMemo = (
  moduleListName: keyof TechnicalDomains,
): Accessor<number | null> => {
  return createMemo<number | null>(() => {
    const moduleList = gradesStore.info[moduleListName]
    const moduleGrades = moduleList.map((module) => module.grade)
    const moduleGradesFiltered = moduleGrades.filter((grade) => grade !== null)
    return moduleGradesFiltered.length > 0
      ? roundTo(average(moduleGradesFiltered), 2)
      : null
  })
}
