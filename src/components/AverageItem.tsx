import { type Component, createMemo, mergeProps, Show } from "solid-js"
import { AveragePercentDiff } from "~/components/AveragePercentDiff"
import { roundTo } from "~/utils/roundTo"

interface CurrentAndLastGrade {
  current: number | null
  previous: number | null
}

interface Props {
  title: string
  grade: number | null
  large?: boolean
}

export const AverageItem: Component<Props> = (innerProps) => {
  const props = mergeProps({ large: false }, innerProps)

  const currentAndLastGrade = createMemo<CurrentAndLastGrade>((prev) => {
    return {
      current: props.grade,
      previous: prev?.current ?? null,
    }
  })

  const percentDiff = createMemo<number | null>(() => {
    const g = currentAndLastGrade()
    if (g.current === null) return null
    if (g.previous === null) return null
    const diff = roundTo(
      (Math.abs(g.current - g.previous) / ((g.current + g.previous) / 2)) * 100,
      10,
    )
    return g.current >= g.previous ? diff : -diff
  })

  return (
    <div
      class="flex flex-wrap items-baseline justify-between gap-y-2 bg-white px-6 py-6"
      classList={{
        "col-span-2 gap-x-2": props.large,
        "gap-x-4": !props.large,
      }}
    >
      <dt class="text-sm font-medium leading-6 text-gray-500">{props.title}</dt>
      <Show when={percentDiff()}>
        {(diff) => <AveragePercentDiff percentDiff={diff()} />}
      </Show>
      <dd class="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900">
        {props.grade ?? "-"}
      </dd>
    </div>
  )
}
