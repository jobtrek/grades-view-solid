import { type ParentComponent } from "solid-js"

interface Props {
  name: string
  actionOnClick: () => void
}

export const NavButton: ParentComponent<Props> = (props) => {
  return (
    <button
      onClick={() => {
        props.actionOnClick()
      }}
      type="button"
      class="relative flex-shrink-0 rounded-full p-1 text-blue-100 hover:bg-white hover:bg-opacity-10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
    >
      <span class="absolute -inset-1.5" />
      <span class="sr-only">{props.name}</span>
      {props.children}
    </button>
  )
}
