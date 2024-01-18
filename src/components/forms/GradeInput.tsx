import { type Component, Show } from "solid-js"
import {
  createForm,
  getErrors,
  reset,
  type SubmitHandler,
  valiForm,
} from "@modular-forms/solid"
import {
  type AddGradeForm,
  AddGradeSchema,
  gradeSchemaLabels,
} from "~/types/schemas/gradeFormSchema"
import { Alert } from "~/components/utils/Alert"
import { transformKeyToLabel } from "~/utils/transformKeyToLabel"
import DisappearingNotification from "~/components/utils/DisappearingNotification"

interface Props {
  onNewGrade: (g: number) => void
}

export const GradeInput: Component<Props> = (props) => {
  const [addGradeForm, AddGrade] = createForm<AddGradeForm>({
    validate: valiForm(AddGradeSchema),
  })

  const handleSubmit: SubmitHandler<AddGradeForm> = (values) => {
    props.onNewGrade(values.grade)

    reset(addGradeForm)
  }

  return (
    <AddGrade.Form onSubmit={handleSubmit}>
      <AddGrade.Field name="grade" type="number">
        {(field, props) => (
          <div class="mr-1.5">
            <label for={field.name} class="sr-only">
              Add grade
            </label>
            <div class="flex rounded-md shadow-sm">
              <div class="relative flex flex-grow items-stretch focus-within:z-10">
                <input
                  {...props}
                  type="number"
                  id={field.name}
                  step="0.5"
                  min="1"
                  max="6"
                  value={field.value}
                  class="block w-16 rounded-none rounded-l-md border-0 py-1.5 ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  classList={{
                    "text-red-900 ring-red-300 placeholder:text-red-300 focus:ring-red-500":
                      field.error !== "",
                    "text-gray-900 ring-gray-300 placeholder:text-gray-400 focus:ring-sky-600":
                      field.error === "",
                  }}
                  placeholder="4"
                />
              </div>
              <button
                type="submit"
                disabled={addGradeForm.submitting}
                class="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                <svg
                  class="-ml-0.5 h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 3.75A.75.75 0 012.75 3h11.5a.75.75 0 010 1.5H2.75A.75.75 0 012 3.75zM2 7.5a.75.75 0 01.75-.75h6.365a.75.75 0 010 1.5H2.75A.75.75 0 012 7.5zM14 7a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02l-1.95-2.1v6.59a.75.75 0 01-1.5 0V9.66l-1.95 2.1a.75.75 0 11-1.1-1.02l3.25-3.5A.75.75 0 0114 7zM2 11.25a.75.75 0 01.75-.75H7A.75.75 0 017 12H2.75a.75.75 0 01-.75-.75z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </AddGrade.Field>
      <Show when={addGradeForm.invalid}>
        <DisappearingNotification>
          <Alert
            content="Le formulaire n'est pas valide"
            details={getErrors(addGradeForm)}
            transformFunction={(key) =>
              transformKeyToLabel(key, gradeSchemaLabels)
            }
          />
        </DisappearingNotification>
      </Show>
    </AddGrade.Form>
  )
}
