import { type Component, For } from "solid-js"
import { Combobox } from "@ark-ui/solid"
import { Portal } from "solid-js/web"
import { epsicModules } from "~/data/epsicModules"

export const AutocompleteComboBox: Component = (props) => {
  return (
    <Combobox.Root
      items={epsicModules}
      inputBehavior="autocomplete"
      class="sm:col-span-4"
    >
      <Combobox.Label class="block text-sm font-medium leading-6 text-gray-900">
        Framework
      </Combobox.Label>
      <Combobox.Control class="relative mt-2">
        <Combobox.Input class="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-12 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        <Combobox.Trigger class="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <svg
            class="h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
              clip-rule="evenodd"
            />
          </svg>
        </Combobox.Trigger>
      </Combobox.Control>
      <Portal>
        <Combobox.Positioner>
          <Combobox.Content>
            <Combobox.ItemGroup
              class="max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
              id="framework"
            >
              <For each={epsicModules}>
                {(item) => (
                  <Combobox.Item
                    class="relative cursor-default select-none py-2 pl-8 pr-4 text-gray-900 data-[state=checked]:text-white data-[state=checked]:bg-indigo-600 aria-selected:bg-indigo-600 aria-selected:text-white hover:bg-indigo-600 hover:text-white"
                    item={item}
                  >
                    <Combobox.ItemText>
                      <span class="block truncate">
                        {item.no} - {item.description}
                      </span>
                    </Combobox.ItemText>
                    <Combobox.ItemIndicator asChild={true}>
                      <span class="absolute inset-y-0 left-0 items-center pl-1.5 hidden text-indigo-600 data-[state=checked]:flex data-[state=checked]:text-white">
                        <svg
                          class="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                    </Combobox.ItemIndicator>
                  </Combobox.Item>
                )}
              </For>
            </Combobox.ItemGroup>
          </Combobox.Content>
        </Combobox.Positioner>
      </Portal>
    </Combobox.Root>
  )
}
