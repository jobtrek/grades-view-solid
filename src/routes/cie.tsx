import { ModulesGradesSection } from "~/components/ModulesGradesSection"
import { cieModules } from "~/data/cieModules"
import type { JSX } from "solid-js"
import { createAvailableModuleMemo } from "~/store/gradeStore"

export default function Cie(): JSX.Element {
  const availableModules = createAvailableModuleMemo("cie", cieModules)
  return (
    <ModulesGradesSection
      name="cie"
      title="Modules CIE"
      modules={availableModules()}
    />
  )
}
