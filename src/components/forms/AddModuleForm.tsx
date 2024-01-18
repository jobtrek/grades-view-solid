import { type Component, createMemo, Show } from "solid-js"
import { type Input, maxValue, minValue, number, object, string } from "valibot"
import {
  createForm,
  FormError,
  getErrors,
  reset,
  setValue,
  type SubmitHandler,
  valiForm,
} from "@modular-forms/solid"
import { Alert } from "~/components/utils/Alert"
import { type Module, type ModuleGrade } from "~/types/models/GradeStoreModels"
import { AutocompleteComboBox } from "~/components/forms/fields/AutocompleteComboBox"
import { transformKeyToLabel } from "~/utils/transformKeyToLabel"

export const addModuleSchemaLabels = {
  grade: "Note",
  module: "Module",
}

const AddModuleGradeSchema = object({
  grade: number([
    maxValue(6, "La note ne peut pas être supérieure à 6"),
    minValue(1, "La note ne peut pas être inférieure à 1"),
  ]),
  module: string(),
} satisfies Record<keyof typeof addModuleSchemaLabels, any>)

type AddModuleGradeForm = Input<typeof AddModuleGradeSchema>

interface Props {
  addModule: (m: ModuleGrade) => void
  availableModules: Module[]
}

export const AddModuleForm: Component<Props> = (props) => {
  const [addModuleGradeForm, AddGrade] = createForm<AddModuleGradeForm>({
    validate: valiForm(AddModuleGradeSchema),
  })

  const autocompleteList = createMemo(() => {
    return props.availableModules.map((m) => ({
      label: m.description,
      value: m.no,
    }))
  })

  const handleSubmit: SubmitHandler<AddModuleGradeForm> = (values) => {
    // Check if the submitted module exists
    const module = props.availableModules.find((m) => {
      return `${m.no} - ${m.description}` === values.module
    })
    if (module === undefined) {
      throw new FormError<AddModuleGradeForm>("Impossible d'ajouter la note", {
        module: "Le module n'existe pas",
      })
    }

    props.addModule({
      no: module.no,
      description: module.description,
      grade: values.grade,
    })

    reset(addModuleGradeForm)
  }

  const setFormComboboxValue = (value: string): void => {
    setValue(addModuleGradeForm, "module", value)
  }

  return (
    <div class="px-4 pt-6 sm:gap-4 sm:px-0">
      <AddGrade.Form onSubmit={handleSubmit}>
        <div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 lg:grid-cols-8">
          <AddGrade.Field name="module" type="string">
            {(field, props) => (
              <AutocompleteComboBox
                {...props}
                label="Choissisez votre note de module"
                error={field.error}
                required
                value={field.value}
                placeholder="Recherchez un module"
                items={autocompleteList()}
                setValue={setFormComboboxValue}
              />
            )}
          </AddGrade.Field>
          <AddGrade.Field name="grade" type="number">
            {(field, props) => (
              <div class="sm:col-span-2">
                <label
                  for={field.name}
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Note
                </label>
                <div class="mt-2 flex rounded-md shadow-sm">
                  <div class="relative flex flex-grow items-stretch focus-within:z-10">
                    <input
                      {...props}
                      type="number"
                      min="1"
                      max="6"
                      step="0.5"
                      id={field.name}
                      required
                      class="block w-full rounded-none rounded-l-md border-0 py-1.5 ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                      value={field.value}
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
                    disabled={addModuleGradeForm.submitting}
                    class="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
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
                    Ajouter
                  </button>
                </div>
              </div>
            )}
          </AddGrade.Field>
        </div>
      </AddGrade.Form>
      <Show when={addModuleGradeForm.invalid}>
        <div class="pt-4">
          <Alert
            content="Le formulaire n'est pas valide"
            details={getErrors(addModuleGradeForm)}
            transformFunction={(key) =>
              transformKeyToLabel(key, addModuleSchemaLabels)
            }
          />
        </div>
      </Show>
    </div>
  )
}
