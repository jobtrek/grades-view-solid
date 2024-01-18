import type { SetStoreFunction } from "solid-js/store"
import type {
  ModuleGrade,
  StudentGrades,
  TechnicalDomains,
} from "~/data/GradeStoreModels"

export const updateTechnicalModuleGrade = (
  setGradesStore: SetStoreFunction<StudentGrades>,
  domain: keyof TechnicalDomains,
  module: ModuleGrade,
): void => {
  setGradesStore("info", domain, (m) => m.no === module.no, {
    grade: module.grade,
  })
}
