import { ModulesGradesSection } from "~/components/ModulesGradesSection"
import { cieModules } from "~/data/cieModules"
import type { JSX } from "solid-js"

export default function Cie(): JSX.Element {
  return (
    <ModulesGradesSection name="cie" title="Modules CIE" modules={cieModules} />
  )
}
