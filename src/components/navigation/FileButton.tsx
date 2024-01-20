import { type Component, onMount } from "solid-js"
import { NavButton } from "~/components/navigation/NavButton"

/**
 * A special component to simulate a file input, but only with a button.
 */
export const FileButton: Component = (props) => {
  let fileInput: HTMLInputElement

  const handleClick = (): void => {
    fileInput.click()
  }

  const handleFileChange = (): void => {
    console.log(fileInput.files)
  }

  return (
    <>
      <div class="hidden">
        <input
          ref={fileInput}
          type="file"
          accept=".json"
          onChange={handleFileChange}
        />
      </div>
      <NavButton name="Import" actionOnClick={handleClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-6 h-6"
        >
          <path
            fill-rule="evenodd"
            d="M5.625 1.5H9a3.75 3.75 0 0 1 3.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 0 1 3.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 0 1-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875Zm5.845 17.03a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V12a.75.75 0 0 0-1.5 0v4.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3Z"
            clip-rule="evenodd"
          />
          <path d="M14.25 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 16.5 7.5h-1.875a.375.375 0 0 1-.375-.375V5.25Z" />
        </svg>
      </NavButton>
    </>
  )
}
