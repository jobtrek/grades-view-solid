import { type RouteSectionProps } from "@solidjs/router"
import { type JSX, Suspense } from "solid-js"
import { AveragesSection } from "~/components/AveragesSection"

export default function (props: RouteSectionProps): JSX.Element {
  return (
    <div class="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8">
      <Suspense>{props.children}</Suspense>
      <AveragesSection />
    </div>
  )
}
