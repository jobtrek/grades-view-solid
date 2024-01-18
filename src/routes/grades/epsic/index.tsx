import { ModulesGradesSection } from "~/components/ModulesGradesSection"
import type { JSX } from "solid-js"
import { epsicModules } from "~/data/epsicModules"
import { createAvailableTechnicalModuleMemo } from "~/contexts/gradesContext/memoUtils/createAvailableTechnicalModuleMemo"

export default function Epsic(): JSX.Element {
  const availableModules = createAvailableTechnicalModuleMemo(
    "epsic",
    epsicModules,
  )
  return (
    <ModulesGradesSection
      name="epsic"
      title="Modules EPSIC"
      modules={availableModules()}
    />
  )
}
