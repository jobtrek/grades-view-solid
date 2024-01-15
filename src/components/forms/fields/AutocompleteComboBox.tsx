import {
  type Component,
  createEffect,
  createMemo,
  createSignal,
  createUniqueId,
  For,
  Index,
  type JSX,
  Show,
  splitProps,
} from "solid-js"
import { type Maybe } from "@modular-forms/solid"
import * as combobox from "@zag-js/combobox"
import { normalizeProps, useMachine, mergeProps } from "@zag-js/solid"

interface AutocompleteComboBoxProps {
  items: Array<{ label: string; value: number | string }>
  name: string
  type: "string" | "number"
  label: string
  placeholder?: string
  error: string | undefined
  required?: boolean
  ref: (el: HTMLInputElement) => void
  onInput: JSX.EventHandler<HTMLInputElement, InputEvent>
  onChange: JSX.EventHandler<HTMLInputElement, Event>
  onBlur: JSX.EventHandler<HTMLInputElement, FocusEvent>
}

export const AutocompleteComboBox: Component<AutocompleteComboBoxProps> = (
  props,
) => {
  // const [, inputProps] = splitProps(props, ["label", "error", "items"])

  const [comboboxValue, setComboboxValue] = createSignal("")

  const remainingOptions = createMemo(() => {
    return props.items.filter((item) => {
      return item.label.toLowerCase().includes(comboboxValue().toLowerCase())
    })
  })

  const collection = createMemo(() =>
    combobox.collection({
      items: remainingOptions(),
      itemToString: (item) => `${item.value} - ${item.label}`,
    }),
  )

  const [state, send] = useMachine(
    combobox.machine({
      id: createUniqueId(),
      collection: collection(),
      placeholder: props.placeholder,
      onInputValueChange({ value }) {
        setComboboxValue(value)
      },
      onValueChange({ value }) {
        console.log(value)
        props.onChange({ target: { value } })
      },
    }),
  )
  const api = createMemo(() => combobox.connect(state, send, normalizeProps))

  /** const inputProps = mergeProps(api().inputProps, {
    onInput: props.onInput,
    onChange: props.onChange,
    onBlur: props.onBlur,
  }) */

  // Collection must be redefined
  createEffect(() => {
    api().setCollection(collection())
  })

  return (
    <div {...api().rootProps} class="sm:col-span-4 lg:col-span-6">
      <label
        {...api().labelProps}
        for={props.name}
        class="block text-sm font-medium leading-6 text-gray-900"
      >
        {props.required === true && <span>*</span>}
        {props.label}
      </label>
      <div {...api().controlProps} class="relative mt-2">
        <input
          {...api().inputProps}
          id={props.name}
          class="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-12 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
          classList={{
            "text-red-900 ring-red-300 placeholder:text-red-300 focus:ring-red-500":
              props.error !== "",
            "text-gray-900 ring-gray-300 placeholder:text-gray-400 focus:ring-sky-600":
              props.error === "",
          }}
          role="combobox"
          aria-invalid={!(props.error == null)}
          aria-errormessage={`${props.name}-error`}
        />
        <button
          {...api().triggerProps}
          type="button"
          class="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none"
        >
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
        </button>

        <Show when={remainingOptions().length > 0}>
          <ul
            {...api().contentProps}
            class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
            id="options"
            role="listbox"
          >
            {/* <!--
        Combobox option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation.

        Active: "text-white bg-indigo-600", Not Active: "text-gray-900"
      --> */}
            <For each={remainingOptions()}>
              {(item) => (
                <li
                  {...api().getItemProps({ item })}
                  class="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[highlighted]:text-white data-[highlighted]:bg-blue-600"
                  id="option-0"
                  role="option"
                  tabIndex="-1"
                >
                  <div class="flex">
                    {/* <!-- Selected: "font-semibold" --> */}
                    <span class="group-data-[state=checked]:font-semibold">
                      {item.value}
                    </span>
                    {/* <!-- Active: "text-indigo-200", Not Active: "text-gray-500" --> */}
                    <span class="ml-2 truncate">{item.label}</span>
                  </div>

                  {/* <!--
                    Checkmark, only display for selected option.

                    Active: "text-white", Not Active: "text-indigo-600"
                  --> */}
                  <Show when={api().getItemState({ item }).isSelected}>
                    <span class="absolute inset-y-0 right-0 flex items-center pr-4 text-blue-600 group-data-[highlighted]:text-white">
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
                  </Show>
                </li>
              )}
            </For>
          </ul>
        </Show>
      </div>
    </div>
  )
}
