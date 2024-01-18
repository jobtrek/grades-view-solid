import { ModulesGradesSection } from "~/components/ModulesGradesSection"
import { cieModules } from "~/data/cieModules"
import type { JSX } from "solid-js"
import { createAvailableTechnicalModuleMemo } from "~/contexts/gradesContext/memoUtils/createAvailableTechnicalModuleMemo"

export default function (): JSX.Element {
  const availableModules = createAvailableTechnicalModuleMemo("cie", cieModules)
  return (
    <ModulesGradesSection
      name="cie"
      title="Modules CIE"
      modules={availableModules()}
    />
  )
}
