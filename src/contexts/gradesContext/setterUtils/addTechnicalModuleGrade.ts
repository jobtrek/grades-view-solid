import type {
  ModuleWithGrade,
  TechnicalDomains,
} from "~/types/models/GradeStoreModels"
import { useGradesContext } from "~/contexts/gradesContext/GradesContext"

const [, setGradesStore] = useGradesContext()
export const addTechnicalModuleGrade = (
  domain: keyof TechnicalDomains,
  module: ModuleWithGrade,
): void => {
  setGradesStore("info", domain, (m) => [...m, module])
}
