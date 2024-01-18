import type { ModuleGrade, TechnicalDomains } from "~/data/GradeStoreModels"
import { useGradesContext } from "~/contexts/gradesContext/GradesContext"

const [, setGradesStore] = useGradesContext()
export const addTechnicalModuleGrade = (
  domain: keyof TechnicalDomains,
  module: ModuleGrade,
): void => {
  setGradesStore("info", domain, (m) => [...m, module])
}
