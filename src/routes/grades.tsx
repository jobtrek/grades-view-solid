import { type RouteSectionProps } from "@solidjs/router"
import { type JSX } from "solid-js"
import { clientOnly } from "@solidjs/start"

const AveragesSectionClient = clientOnly(
  async () => await import("~/components/AveragesSection"),
)

export default function (props: RouteSectionProps): JSX.Element {
  return (
    <div class="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8">
      <div class="grid grid-cols-1 gap-4 lg:col-span-2">{props.children}</div>
      <AveragesSectionClient />
    </div>
  )
}
