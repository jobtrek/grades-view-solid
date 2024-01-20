import type {
  ModuleWithGrade,
  TechnicalDomains,
} from "~/types/models/GradeStoreModels"
import { useGradesContext } from "~/contexts/gradesContext/GradesContext"

const [, setGradesStore] = useGradesContext()
export const removeTechnicalModuleGrade = (
  domain: keyof TechnicalDomains,
  module: ModuleWithGrade,
): void => {
  setGradesStore("info", domain, (m) => m.filter((m) => m.no !== module.no))
}
