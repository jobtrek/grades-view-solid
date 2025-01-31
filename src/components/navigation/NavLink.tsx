import { type ParentComponent } from "solid-js"

interface Props {
  name: string
  href: string
}

export const NavLink: ParentComponent<Props> = (props) => {
  return (
    <a
      href={props.href}
      type="button"
      class="relative shrink-0 rounded-full p-1 text-blue-100 hover:bg-white hover:bg-opacity-10 hover:text-white focus:outline-hidden focus:ring-2 focus:ring-white"
    >
      <span class="absolute -inset-1.5" />
      <span class="sr-only">{props.name}</span>
      {props.children}
    </a>
  )
}
