import { ModulesGradesSection } from "~/components/ModulesGradesSection"
import { epsicModules } from "~/data/epsicModules"
import type { JSX } from "solid-js"

export default function Epsic(): JSX.Element {
  return (
    <ModulesGradesSection
      name="epsic"
      title="Modules EPSIC"
      modules={epsicModules}
    />
  )
}
