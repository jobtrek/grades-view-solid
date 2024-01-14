import { type Component, Index } from "solid-js"
import { GradeElement } from "~/components/GradeElement"
import { TooltipContainer } from "~/components/TooltipContainer"

interface Props {
  grades: number[]
  removeGradeTrigger: (index: number) => void
}

export const GradeContainer: Component<Props> = (props) => {
  return (
    <div class="flex flex-row flex-nowrap overflow-y-scroll gap-x-1.5">
      <Index each={props.grades}>
        {(grade, index) => (
          <TooltipContainer description="Super note">
            <GradeElement
              grade={grade()}
              class="font-medium text-sm px-2 py-2"
              action={() => {
                props.removeGradeTrigger(index)
              }}
            />
          </TooltipContainer>
        )}
      </Index>
    </div>
  )
}
