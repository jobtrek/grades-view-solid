import { type Component } from 'solid-js'
import { A } from 'solid-start'

export const AppNavigation: Component = () => {
  return (
    <header class="bg-sky-600 pb-24">
      <div class="container mx-auto sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-center py-5 lg:justify-between">
          <div class="absolute left-0 flex-shrink-0 lg:static">
            <A class="text-sky-100" href="/">
              <span class="sr-only">Grades calculator</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="h-8 w-8"
              >
                <path
                  d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z"/>
                <path
                  d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z"/>
                <path
                  d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z"/>
              </svg>
            </A>
          </div>

          <div class="hidden lg:ml-4 lg:flex lg:items-center lg:pr-0.5">
            <button
              type="button"
              class="relative flex-shrink-0 rounded-full p-1 text-sky-100 hover:bg-white hover:bg-opacity-10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
            >
              <span class="absolute -inset-1.5"/>
              <span class="sr-only">Reload</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
        <div class="hidden border-t border-white border-opacity-20 py-5 lg:block">
          <div class="grid grid-cols-3 items-center gap-8">
            <div class="col-span-2">
              <nav class="flex space-x-4">
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
            </div>
            <div class="col-span-1">
              <div class="w-full">
                <label for="search" class="sr-only">Search</label>
                <div class="relative">
                  <div
                    class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor"
                         aria-hidden="true">
                      <path fill-rule="evenodd"
                            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                            clip-rule="evenodd"/>
                    </svg>
                  </div>
                  <input id="search" name="search"
                         class="block w-full rounded-md border-0 bg-sky-700 py-1.5 pl-10 pr-3 text-sky-100 placeholder:text-sky-500 focus:bg-white focus:text-gray-900 focus:ring-0 focus:placeholder:text-gray-500 sm:text-sm sm:leading-6"
                         placeholder="Search" type="search"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
