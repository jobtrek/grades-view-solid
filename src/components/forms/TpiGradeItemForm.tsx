import { type Component, createEffect, Show } from "solid-js"
import {
  createForm,
  getErrors,
  setValue,
  type SubmitHandler,
  valiForm,
} from "@modular-forms/solid"
import {
  type AddGradeForm,
  AddGradeSchema,
  gradeSchemaLabels,
} from "~/types/schemas/gradeFormSchema"
import { Alert } from "~/components/utils/Alert"
import { useGradesContext } from "~/contexts/gradesContext/GradesContext"
import { updateStudentTpi } from "~/contexts/gradesContext/setterUtils/updateStudentTpi"
import { transformKeyToLabel } from "~/utils/transformKeyToLabel"
import DisappearingNotification from "~/components/utils/DisappearingNotification"

export const TpiGradeItemForm: Component = () => {
  const [gradesStore] = useGradesContext()
  const [addGradeForm, AddGrade] = createForm<AddGradeForm>({
    validate: valiForm(AddGradeSchema),
  })

  createEffect(() => {
    setValue(addGradeForm, "grade", gradesStore.tpi, { shouldValidate: false })
  })

  const handleSubmit: SubmitHandler<AddGradeForm> = (values) => {
    updateStudentTpi(values.grade)
  }

  return (
    <AddGrade.Form
      onSubmit={handleSubmit}
      class="flex flex-wrap items-baseline justify-between gap-y-2 bg-white px-6 py-6 gap-x-4"
    >
      <dt class="text-sm font-medium leading-6 text-gray-500">TPI</dt>
      <dd class="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900">
        <AddGrade.Field name="grade" type="number">
          {(field, props) => (
            <input
              {...props}
              id={field.name}
              name={field.name}
              step="0.5"
              min="1"
              max="6"
              class="block w-full rounded-md text-3xl font-medium border-0 py-1.5 ring-2 ring-gray-200 ring-inset focus:ring-2 focus:ring-inset"
              classList={{
                "text-red-900 ring-red-300 placeholder:text-red-300 focus:ring-red-500":
                  field.error !== "",
                "text-gray-900 ring-gray-300 placeholder:text-gray-400 focus:ring-blue-600":
                  field.error === "",
              }}
              type="number"
              value={field.value ?? gradesStore.tpi ?? ""}
            />
          )}
        </AddGrade.Field>
      </dd>
      <Show when={addGradeForm.invalid}>
        <DisappearingNotification>
          <Alert
            type="error"
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
