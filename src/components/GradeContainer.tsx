import { type Component } from 'solid-js'
import { GradeElement } from '~/components/GradeElement'

export const GradeContainer: Component = () => {
  return (
    <div class="flex flex-row flex-nowrap overflow-y-scroll gap-x-1.5">
      <GradeElement grade={4} class="font-medium text-sm px-2 py-2" />
      <GradeElement grade={3} class="font-medium text-sm px-2 py-2" />
      <GradeElement grade={5} class="font-medium text-sm px-2 py-2" />
      <GradeElement grade={5.5} class="font-medium text-sm px-2 py-2" />
    </div>
  )
}
