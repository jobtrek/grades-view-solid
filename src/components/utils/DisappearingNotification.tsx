import { type Component, createSignal, type JSX, Show } from "solid-js"
import { Portal } from "solid-js/web"
import { makeTimer } from "@solid-primitives/timer"

interface Props {
  children: JSX.Element
}

export const DisappearingNotification: Component<Props> = (props) => {
  const [visible, setVisible] = createSignal(true)

  makeTimer(() => setVisible(false), 5000, setTimeout)

  return (
    <Portal>
      <Show when={visible()}>
        <div class="pointer-events-none fixed inset-x-0 bottom-0 px-6 pb-6">
          <div class="pointer-events-auto ml-auto max-w-xl rounded-xl shadow-lg">
            {props.children}
          </div>
        </div>
      </Show>
    </Portal>
  )
}

export default DisappearingNotification
