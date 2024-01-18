import type {
  ModuleGrade,
  TechnicalDomains,
} from "~/types/models/GradeStoreModels"
import { useGradesContext } from "~/contexts/gradesContext/GradesContext"

const [, setGradesStore] = useGradesContext()
export const addTechnicalModuleGrade = (
  domain: keyof TechnicalDomains,
  module: ModuleGrade,
): void => {
  setGradesStore("info", domain, (m) => [...m, module])
}
