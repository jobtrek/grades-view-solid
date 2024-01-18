import { Tooltip } from "@ark-ui/solid"
import { Portal } from "solid-js/web"
import {
  type Component,
  createEffect,
  createSignal,
  type JSX,
  mergeProps,
  Show,
} from "solid-js"
import { makeTimer } from "@solid-primitives/timer"

interface Props {
  description: string
  children: JSX.Element
  timoutToVisible?: number
  timoutToHide?: number
}

export const TooltipContainer: Component<Props> = (originalProps) => {
  const props = mergeProps(
    {
      timeoutToVisible: 500,
      timeoutToHide: 600,
    },
    originalProps,
  )
  const [mouseIsOver, setMouseIsOver] = createSignal(false)
  const [tooltipVisible, setTooltipVisible] = createSignal(false)

  createEffect(() => {
    if (mouseIsOver()) {
      makeTimer(
        () => setTooltipVisible(true),
        props.timeoutToVisible,
        setTimeout,
      )
    }
  })

  createEffect(() => {
    if (!mouseIsOver() && tooltipVisible()) {
      makeTimer(() => setTooltipVisible(false), props.timeoutToHide, setTimeout)
    }
  })

  return (
    <div class="relative">
      <div
        onMouseEnter={() => setMouseIsOver(true)}
        onMouseLeave={() => setMouseIsOver(false)}
      >
        {props.children}
      </div>
      <Show when={tooltipVisible()}>
        <span
          onMouseEnter={() => setMouseIsOver(true)}
          onMouseLeave={() => setMouseIsOver(false)}
          class="absolute mt-1 z-10 w-60 rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10"
        >
          {props.description}
        </span>
      </Show>
    </div>
  )
}
