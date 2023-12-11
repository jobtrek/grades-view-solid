import { type Component, createMemo, Show } from 'solid-js'
import { AveragePercentDiff } from '~/components/AveragePercentDiff'
import { roundTo } from '~/utils/roundTo'

interface CurrentAndLastGrade { current: number | null, previous: number | null }

export const AverageItem: Component<{ title: string, grade: number | null }> = (props) => {
  const currentAndLastGrade = createMemo<CurrentAndLastGrade>((prev) => {
    return { current: props.grade, previous: prev?.current ?? null }
  })

  const percentDiff = createMemo<number | null>(() => {
    const g = currentAndLastGrade()
    if (g.current === null) return null
    if (g.previous === null) return null
    const diff = roundTo((Math.abs(g.current - g.previous) / ((g.current + g.previous) / 2)) * 100, 10)
    return g.current >= g.previous ? diff : -diff
  })

  return (
    <div
      class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white px-6 py-6">
      <dt class="text-sm font-medium leading-6 text-gray-500">
        {props.title}
      </dt>
      <Show when={percentDiff()}>
        {diff => <AveragePercentDiff percentDiff={diff()} />}
      </Show>
      <dd
        class="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900">
        {props.grade ?? '-'}
      </dd>
    </div>
  )
}
