import { ModulesGradesSection } from "~/components/ModulesGradesSection"
import type { JSX } from "solid-js"
import { createAvailableModuleMemo } from "~/store/gradeStore"
import { epsicModules } from "~/data/epsicModules"

export default function Epsic(): JSX.Element {
  const availableModules = createAvailableModuleMemo("epsic", epsicModules)
  return (
    <ModulesGradesSection
      name="epsic"
      title="Modules EPSIC"
      modules={availableModules()}
    />
  )
}
