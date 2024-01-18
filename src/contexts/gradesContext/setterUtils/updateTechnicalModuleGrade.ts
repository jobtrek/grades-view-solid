import type {
  ModuleGrade,
  TechnicalDomains,
} from "~/types/models/GradeStoreModels"
import { useGradesContext } from "~/contexts/gradesContext/GradesContext"

const [, setGradesStore] = useGradesContext()
export const updateTechnicalModuleGrade = (
  domain: keyof TechnicalDomains,
  module: ModuleGrade,
): void => {
  setGradesStore("info", domain, (m) => m.no === module.no, {
    grade: module.grade,
  })
}
