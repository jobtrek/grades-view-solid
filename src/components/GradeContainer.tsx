import { type Component, Index } from 'solid-js'
import { GradeElement } from '~/components/GradeElement'

export const GradeContainer: Component<{ grades: number[] }> = (props) => {
  return (
    <div class="flex flex-row flex-nowrap overflow-y-scroll gap-x-1.5">
      <Index each={props.grades}>
        {grade => <GradeElement grade={grade()} class="font-medium text-sm px-2 py-2" />}
      </Index>
    </div>
  )
}
