import type { SetStoreFunction } from "solid-js/store"
import type {
  ModuleGrade,
  StudentGrades,
  TechnicalDomains,
} from "~/data/GradeStoreModels"

export const addTechnicalModuleGrade = (
  setGradesStore: SetStoreFunction<StudentGrades>,
  domain: keyof TechnicalDomains,
  module: ModuleGrade,
): void => {
  setGradesStore("info", domain, (m) => [...m, module])
}
