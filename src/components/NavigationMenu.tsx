import { A } from '@solidjs/router'
import type { Component } from 'solid-js'

export const NavigationMenu: Component = () => {
  return <nav class="flex space-x-4">
    <A
      href="/maths"
      activeClass="text-white font-bold"
      inactiveClass="text-sky-100 font-medium"
      class="rounded-md bg-white bg-opacity-0 px-3 py-2 text-sm hover:bg-opacity-10"
    >
      Math
    </A>
    <A
      href="/soci"
      activeClass="text-white font-bold"
      inactiveClass="text-sky-100 font-medium"
      class="rounded-md bg-white bg-opacity-0 px-3 py-2 text-sm hover:bg-opacity-10"
    >
      Société
    </A>
    <A
      href="/English"
      activeClass="text-white font-bold"
      inactiveClass="text-sky-100 font-medium"
      class="rounded-md bg-white bg-opacity-0 px-3 py-2 text-sm hover:bg-opacity-10"
    >
      Anglais
    </A>
    <A
      href="/Epsic"
      activeClass="text-white font-bold"
      inactiveClass="text-sky-100 font-medium"
      class="rounded-md bg-white bg-opacity-0 px-3 py-2 text-sm hover:bg-opacity-10"
    >
      Modules EPSIC
    </A>
    <A
      href="/Cie"
      activeClass="text-white font-bold"
      inactiveClass="text-sky-100 font-medium"
      class="rounded-md bg-white bg-opacity-0 px-3 py-2 text-sm hover:bg-opacity-10"
    >
      CIE
    </A>
  </nav>
}
