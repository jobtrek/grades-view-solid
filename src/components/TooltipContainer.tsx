import { Tooltip } from '@ark-ui/solid'
import { Portal } from 'solid-js/web'
import { type Component, type JSX } from 'solid-js'

interface Props {
  description: string
  children: JSX.Element
}
export const TooltipContainer: Component<Props> = (props) => {
  return (
    <Tooltip.Root openDelay={700} closeDelay={1400}>
      <Tooltip.Trigger>
        {props.children}
      </Tooltip.Trigger>
      <Portal>
        <Tooltip.Positioner>
          <Tooltip.Content asChild>
            <span
              class="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
              {props.description ?? 'Aucunne information'}
            </span>
          </Tooltip.Content>
        </Tooltip.Positioner>
      </Portal>
    </Tooltip.Root>
  )
}
