import { createMemo, Index, type JSX, Show } from "solid-js"

export type AlertTypes = "error" | "warning" | "success"

interface Props<T extends Record<string, string>> {
  type?: AlertTypes
  content: string
  details?: T
  transformFunction?: (content: keyof T) => string
}

export const Alert = <T extends Record<string, string>>(
  props: Props<T>,
): JSX.Element => {
  const colors = createMemo(() => {
    switch (props.type) {
      case "error":
        return ["bg-red-50", "text-red-400", "text-red-700", "text-red-800"]
      case "success":
        return [
          "bg-green-50",
          "text-green-400",
          "text-green-700",
          "text-green-800",
        ]
      default:
        return [
          "bg-amber-50",
          "text-amber-400",
          "text-amber-700",
          "text-amber-800",
        ]
    }
  })
  return (
    <div class={`rounded-md p-4 ${colors()[0]}`}>
      <div class="flex">
        <div class="flex-shrink-0">
          <svg
            class={`h-5 w-5 ${colors()[1]}`}
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div class="ml-3">
          <h3 class={`text-sm font-medium ${colors()[3]}`}>{props.content}</h3>
          <div class={`mt-2 text-sm ${colors()[2]}`}>
            <Show when={props.details}>
              {(details) => (
                <ul role="list" class="list-disc space-y-1 pl-5">
                  <Index each={Object.entries(details())}>
                    {(detail) => (
                      <li>
                        <strong>
                          <Show
                            when={props.transformFunction}
                            fallback={detail()[0]}
                          >
                            {(trasform) => trasform()(detail()[0])}
                          </Show>
                        </strong>{" "}
                        - {detail()[1]}
                      </li>
                    )}
                  </Index>
                </ul>
              )}
            </Show>
          </div>
        </div>
      </div>
    </div>
  )
}
