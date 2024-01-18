import { A } from "@solidjs/router"
import type { Component } from "solid-js"

export const NavigationMenu: Component = () => {
  return (
    <nav class="flex space-x-4">
      <A
        href="/grades/math"
        activeClass="text-white font-bold"
        inactiveClass="text-sky-100 font-medium"
        class="rounded-md bg-white bg-opacity-0 px-3 py-2 text-sm hover:bg-opacity-10"
      >
        Math
      </A>
      <A
        href="/grades/soci"
        activeClass="text-white font-bold"
        inactiveClass="text-sky-100 font-medium"
        class="rounded-md bg-white bg-opacity-0 px-3 py-2 text-sm hover:bg-opacity-10"
      >
        Société
      </A>
      <A
        href="/grades/english"
        activeClass="text-white font-bold"
        inactiveClass="text-sky-100 font-medium"
        class="rounded-md bg-white bg-opacity-0 px-3 py-2 text-sm hover:bg-opacity-10"
      >
        Anglais
      </A>
      <A
        href="/grades/epsic"
        activeClass="text-white font-bold"
        inactiveClass="text-sky-100 font-medium"
        class="rounded-md bg-white bg-opacity-0 px-3 py-2 text-sm hover:bg-opacity-10"
      >
        Modules EPSIC
      </A>
      <A
        href="/grades/cie"
        activeClass="text-white font-bold"
        inactiveClass="text-sky-100 font-medium"
        class="rounded-md bg-white bg-opacity-0 px-3 py-2 text-sm hover:bg-opacity-10"
      >
        CIE
      </A>
    </nav>
  )
}
