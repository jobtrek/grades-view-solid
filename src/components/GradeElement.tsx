import { type Component } from 'solid-js'

interface Props {
  grade: number
  class: string
}

export const GradeElement: Component<Props> = (props) => {
  return (
    <span
      class={`inline-flex items-center gap-x-1.5 rounded-md text-gray-900 ring-1 ring-inset ring-gray-200 ${props.class}`}
    >
      <svg
        class="h-1.5 w-1.5"
        classList={{
          'fill-green-500': props.grade > 4.5,
          'fill-red-500': props.grade < 4,
          'fill-yellow-500': props.grade <= 4.5 && props.grade >= 4
        }}
        viewBox="0 0 6 6"
        aria-hidden="true"
      >
        <circle cx="3" cy="3" r="3" />
      </svg>
      {props.grade}
    </span>
  )
}
