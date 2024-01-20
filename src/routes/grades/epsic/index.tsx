import type { JSX } from "solid-js"
import { epsicModules } from "~/data/epsicModules"
import { createAvailableTechnicalModuleMemo } from "~/contexts/gradesContext/memoUtils/createAvailableTechnicalModuleMemo"
import { clientOnly } from "@solidjs/start"

const ModulesGradesSectionClient = clientOnly(
  async () => await import("~/components/ModulesGradesSection"),
)

export default function (): JSX.Element {
  const availableModules = createAvailableTechnicalModuleMemo(
    "epsic",
    epsicModules,
  )
  return (
    <ModulesGradesSectionClient
      name="epsic"
      title="Modules EPSIC"
      modules={availableModules()}
    />
  )
}
