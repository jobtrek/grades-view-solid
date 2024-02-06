import type { Module, TechnicalDomains } from "~/types/models/GradeStoreModels"
import { type Accessor, createMemo } from "solid-js"
import { useGradesContext } from "~/contexts/gradesContext/GradesContext"

const [gradesStore] = useGradesContext()

export const createAvailableTechnicalModuleMemo = (
  moduleListName: keyof TechnicalDomains,
  moduleList: Module[],
): Accessor<Module[]> => {
  // eslint-disable-next-line solid/reactivity
  return createMemo<Module[]>(() => {
    const actualModules = gradesStore.info[moduleListName]
    return moduleList.filter(
      (module) => !actualModules.map((m) => m.no).includes(module.no),
    )
  })
}
