import { cieModules } from "~/data/cieModules"
import { type JSX } from "solid-js"
import { createAvailableTechnicalModuleMemo } from "~/contexts/gradesContext/memoUtils/createAvailableTechnicalModuleMemo"
import { clientOnly } from "@solidjs/start"

const ModulesGradesSectionClient = clientOnly(
  async () => await import("~/components/ModulesGradesSection"),
)
export default function (): JSX.Element {
  const availableModules = createAvailableTechnicalModuleMemo("cie", cieModules)
  return (
    <ModulesGradesSectionClient
      name="cie"
      title="Modules CIE"
      modules={availableModules()}
    />
  )
}
