import { type Component, Index } from "solid-js"
import { GradeElement } from "~/components/grades/GradeElement"
import { TooltipContainer } from "~/components/utils/TooltipContainer"

interface Props {
  grades: number[]
  removeGradeTrigger: (index: number) => void
}

export const GradeContainer: Component<Props> = (props) => {
  return (
    <div class="flex flex-row flex-wrap gap-x-1.5 gap-y-1.5">
      <Index each={props.grades}>
        {(grade, index) => (
          <TooltipContainer
            description={grade() > 4.5 ? "Super note" : "Note à améliorer"}
          >
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
