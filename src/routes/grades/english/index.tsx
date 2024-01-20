import type { JSX } from "solid-js"
import { clientOnly } from "@solidjs/start"

const GradesSectionClientOnly = clientOnly(
  async () => await import("~/components/GradesSection"),
)

export default function (): JSX.Element {
  return <GradesSectionClientOnly name="eng" title="Anglais" />
}
