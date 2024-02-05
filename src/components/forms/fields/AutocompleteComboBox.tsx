import {
  batch,
  type Component,
  createComputed,
  createMemo,
  createSelector,
  createSignal,
  For,
  type JSX,
  Show,
} from "solid-js"
import { type Maybe } from "@modular-forms/solid"

interface Item {
  label: string
  value: number | string
}

interface AutocompleteComboBoxProps {
  items: Item[]
  name: string
  label: string
  placeholder?: string
  error: string | undefined
  required?: boolean
  ref: (el: HTMLInputElement) => void
  onInput: JSX.EventHandler<HTMLInputElement, InputEvent>
  value: Maybe<string> // To be able to use the component as a controlled component
  // onChange: JSX.EventHandler<HTMLInputElement, Event>
  onBlur: JSX.EventHandler<HTMLInputElement, FocusEvent>
  setValue: (value: string) => void // A callback to forward the new value to the parent
}

export const AutocompleteComboBox: Component<AutocompleteComboBoxProps> = (
  props,
) => {
  const [inputValue, setInputValue] = createSignal("")
  const [isComboboxOpen, toggleCombobox] = createSignal(false)
  const [activeItem, setActiveItem] = createSignal(0)
  const [selectedItem, setSelectedItem] = createSignal<Item | null>(null)
  const [mouseIsOverOptions, setMouseIsOverOptions] = createSignal(false)
  const isItemActive = createSelector(activeItem)

  // Reset internal signals on value changes from parent
  createComputed(() => {
    setInputValue(props.value ?? "")
    setSelectedItem(null)
  })

  // Filter items to display depending on the user input
  const displayableItems = createMemo(() => {
    return props.items.filter((item): boolean =>
      `${item.value} - ${item.label}`
        .toLowerCase()
        .includes(inputValue().toLowerCase()),
    )
  })

  // On user input, update value in signal
  const handleInput: JSX.EventHandler<HTMLInputElement, InputEvent> = (e) => {
    setInputValue(e.currentTarget.value)
    props.onInput(e) // Forward the event to the parent
  }

  const handleBlur: JSX.EventHandler<HTMLInputElement, FocusEvent> = (e) => {
    // Do not react to blur in these situations
    if (mouseIsOverOptions() || !isComboboxOpen() || e.relatedTarget !== null) {
      return
    }
    props.onBlur(e) // Forward the event to the parent
    toggleCombobox(false)
    setActiveItem(0)
  }

  // Open combobox on focus
  const handleFocus: JSX.EventHandler<HTMLInputElement, FocusEvent> = (e) => {
    toggleCombobox(true)
  }

  // Manage different key behaviors
  const handleKeyDown: JSX.EventHandler<HTMLInputElement, KeyboardEvent> = (
    e,
  ) => {
    if (e.key === "ArrowUp") {
      setActiveItem((prev) =>
        prev <= 0 ? displayableItems().length : prev - 1,
      )
      e.preventDefault()
    }
    if (e.key === "ArrowDown") {
      setActiveItem((prev) =>
        prev >= displayableItems().length ? 0 : prev + 1,
      )
      e.preventDefault()
    }
    if (e.key === "Enter") {
      if (displayableItems().length > 0) {
        handleItemSelection(displayableItems()[activeItem()])
        setActiveItem(0)
      }
      e.preventDefault()
    }
    if (e.key === "Escape") {
      if (displayableItems().length > 0) {
        setActiveItem(0)
        toggleCombobox(false)
      }
      e.preventDefault()
    }
  }

  // Open or close combobox when click on side button
  const handleButtonClick: JSX.EventHandler<HTMLButtonElement, MouseEvent> = (
    e,
  ) => {
    if (!isComboboxOpen()) {
      // @ts-expect-error Impossible to guarantee parent element presence
      e.currentTarget.parentElement.querySelector("input")?.focus()
    } else {
      toggleCombobox(false)
    }
  }

  const handleItemSelection = (item: Item): void => {
    // Perform combobox state updates
    batch(() => {
      setSelectedItem(item)
      setInputValue(`${item.value} - ${item.label}`)
      toggleCombobox(false)
      setMouseIsOverOptions(false)
    })
    // Update parent value
    props.setValue(inputValue())
  }

  return (
    <div class="md:col-span-3 lg:col-span-5">
      <label
        for="combobox"
        class="block text-sm font-medium leading-6 text-gray-900"
      >
        {props.label}
      </label>
      <div class="relative mt-2">
        <input
          onInput={handleInput}
          onBlur={handleBlur}
          onFocus={handleFocus}
          value={inputValue()}
          onKeyDown={handleKeyDown}
          name={props.name}
          id={props.name}
          placeholder={props.placeholder}
          type="text"
          class="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-12 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
          classList={{
            "text-red-900 ring-red-300 placeholder:text-red-300 focus:ring-red-500":
              props.error !== "",
            "text-gray-900 ring-gray-300 placeholder:text-gray-400 focus:ring-blue-600":
              props.error === "",
          }}
          role="combobox"
          aria-controls="options"
          autocomplete="off"
          aria-expanded="false"
          ref={props.ref}
        />
        <button
          onClick={handleButtonClick}
          onBlur={() => toggleCombobox(false)}
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

        <Show when={isComboboxOpen()}>
          <ul
            onMouseEnter={() => setMouseIsOverOptions(true)}
            onMouseLeave={() => setMouseIsOverOptions(false)}
            class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
            id="options"
            role="listbox"
          >
            <For each={displayableItems()}>
              {(item, index) => (
                <li
                  onClick={() => {
                    handleItemSelection(item)
                  }}
                  onMouseEnter={() => setActiveItem(index())}
                  class="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900"
                  classList={{
                    "text-white bg-blue-600": isItemActive(index()),
                  }}
                  id={`option-${index()}`}
                  role="option"
                >
                  <div class="flex gap-2">
                    <span
                      class="ml-2 text-gray-500"
                      classList={{
                        "text-white": isItemActive(index()),
                      }}
                    >
                      {item.value}
                    </span>
                    <span class="truncate">{item.label}</span>
                  </div>
                  <Show when={selectedItem()?.value === item.value}>
                    <span
                      class="absolute inset-y-0 right-0 flex items-center pr-4 text-blue-600"
                      classList={{
                        "text-white": isItemActive(index()),
                      }}
                    >
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
            <Show when={displayableItems().length === 0}>
              <li class="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-600">
                <div class="flex gap-2">
                  <span class="truncate">
                    Aucunnes autres options disponibles.
                  </span>
                </div>
              </li>
            </Show>
          </ul>
        </Show>
      </div>
    </div>
  )
}
