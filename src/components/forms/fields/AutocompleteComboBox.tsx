import {
  type Component,
  createEffect,
  createMemo,
  createSignal,
  For,
  type JSX,
  Show,
} from "solid-js"

interface Item {
  label: string
  value: number | string
}

interface AutocompleteComboBoxProps {
  items: Item[]
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
  const [inputValue, setInputValue] = createSignal("")
  const [isComboboxOpen, toggleCombobox] = createSignal(false)
  const [activeItem, setActiveItem] = createSignal(0)
  const [selectedItem, setSelectedItem] = createSignal<Item | null>(null)
  const [mouseIsOverOptions, setMouseIsOverOptions] = createSignal(false)

  createEffect(() => {
    console.log(selectedItem())
  })
  createEffect(() => {
    console.log(mouseIsOverOptions())
  })
  const displayableItems = createMemo(() => {
    return props.items.filter((item) =>
      item.label.toLowerCase().includes(inputValue().toLowerCase()),
    )
  })

  const handleInput: JSX.EventHandler<HTMLInputElement, InputEvent> = (e) => {
    setInputValue(e.currentTarget.value)
  }

  const handleBlur: JSX.EventHandler<HTMLInputElement, FocusEvent> = (e) => {
    console.log("blur")
    if (mouseIsOverOptions() || !isComboboxOpen()) return
    toggleCombobox(false)
    setActiveItem(0)
  }

  const handleFocus: JSX.EventHandler<HTMLInputElement, FocusEvent> = (e) => {
    toggleCombobox(true)
  }

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
  }

  const handleButtonClick: JSX.EventHandler<HTMLButtonElement, MouseEvent> = (
    e,
  ) => {
    console.log("click")
    // Fix combobox behaviour on button click
    if (isComboboxOpen())
      e.currentTarget.parentElement.querySelector("input")?.focus()
  }

  const handleItemSelection = (item: Item): void => {
    console.log("hello")
    setSelectedItem(item)
    setInputValue(item.label)
    toggleCombobox(false)
  }

  return (
    <div class="sm:col-span-4 lg:col-span-6">
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
          id="combobox"
          type="text"
          class="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-12 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
          role="combobox"
          aria-controls="options"
          aria-expanded="false"
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
            {/* <!--
        Combobox option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation.

        Active: "text-white bg-blue-600", Not Active: "text-gray-900"
      --> */}
            <For each={displayableItems()}>
              {(item, index) => (
                <li
                  onClick={() => {
                    handleItemSelection(item)
                  }}
                  class="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 hover:text-white hover:bg-blue-600"
                  classList={{
                    "text-white bg-blue-600": index() === activeItem(),
                  }}
                  id="option-0"
                  role="option"
                  tabIndex="-1"
                >
                  <div class="flex gap-2">
                    {/* <!-- Active: "text-blue-200", Not Active: "text-gray-500" --> */}
                    <span
                      class="ml-2 text-gray-500 group-hover:text-white"
                      classList={{
                        "text-white bg-blue-600": index() === activeItem(),
                      }}
                    >
                      #{item.value}
                    </span>
                    {/* <!-- Selected: "font-semibold" --> */}
                    <span class="truncate">{item.label}</span>
                  </div>

                  {/* <!--
          Checkmark, only display for selected option.

          Active: "text-white", Not Active: "text-blue-600"
        --> */}
                  <span
                    class="absolute inset-y-0 right-0 flex items-center pr-4 group-hover:text-white"
                    classList={{
                      "text-blue-600": index() !== activeItem(),
                      "text-white": index() === activeItem(),
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
                </li>
              )}
            </For>
          </ul>
        </Show>
      </div>
    </div>
  )
}
