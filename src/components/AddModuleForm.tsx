import { type Component, Show } from 'solid-js'
import { type Module, type ModuleGrade } from '~/types/Module'
import { type Input, maxValue, minValue, number, object } from 'valibot'
import {
  createForm,
  FormError,
  getErrors, reset,
  type SubmitHandler,
  valiForm
} from '@modular-forms/solid'
import { Alert } from '~/components/Alert'

const AddModuleGradeSchema = object({
  grade: number([
    maxValue(6, 'La note ne peut pas être supérieure à 6'),
    minValue(1, 'La note ne peut pas être inférieure à 1')
  ]),
  module: number()
})

type AddModuleGradeForm = Input<typeof AddModuleGradeSchema>

interface Props {
  addModule: (m: ModuleGrade) => void
  availableModules: Module[]
}

export const AddModuleForm: Component<Props> = (props) => {
  const [addModuleGradeForm, AddGrade] = createForm<AddModuleGradeForm>(
    {
      validate: valiForm(AddModuleGradeSchema)
    }
  )

  const handleSubmit: SubmitHandler<AddModuleGradeForm> = (values, event) => {
    // Check if the submitted module exists
    const module = props.availableModules.find(m => m.no === values.module)
    if (module === undefined) {
      throw new FormError<AddModuleGradeForm>('Impossible d\'ajouter la note', { module: 'Le module n\'existe pas' })
    }

    props.addModule({ no: module.no, name: module.name, grade: values.grade })

    reset(addModuleGradeForm)
  }

  return (
    <div class="px-4 pt-6 sm:gap-4 sm:px-0">
      <AddGrade.Form onSubmit={handleSubmit}>
        <div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <AddGrade.Field name="module" type="number">
            {(field, props) =>
              <div class="sm:col-span-4">
                <label for={field.name}
                       class="block text-sm font-medium leading-6 text-gray-900">
                  Numéro du module
                </label>
                <div class="relative mt-2 rounded-md shadow-sm">
                  <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg fill="currentColor" viewBox="0 0 24 24" stroke="currentColor"
                         class="h-5 w-5 text-gray-400" aria-hidden="true">
                      <path
                        d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z"/>
                    </svg>
                  </div>
                  <input {...props} type="number" id={field.name} required
                         value={field.value}
                         class="block w-full rounded-md border-0 py-1.5 pl-10 ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                         classList={{
                           'text-red-900 ring-red-300 placeholder:text-red-300 focus:ring-red-500': field.error !== '',
                           'text-gray-900 ring-gray-300 placeholder:text-gray-400 focus:ring-sky-600': field.error === ''
                         }}
                         placeholder="117"/>

                </div>
              </div>
            }
          </AddGrade.Field>
          <AddGrade.Field name="grade" type="number">
            {(field, props) =>
              <div class="sm:col-span-2">
                <label for={field.name} class="block text-sm font-medium leading-6 text-gray-900">
                  Note
                </label>
                <div class="mt-2 flex rounded-md shadow-sm">
                  <div class="relative flex flex-grow items-stretch focus-within:z-10">
                    <input {...props} type="number" min="1" max="6" step="0.5" id={field.name} required
                       class="block w-full rounded-none rounded-l-md border-0 py-1.5 ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                       value={field.value}
                       classList={{
                         'text-red-900 ring-red-300 placeholder:text-red-300 focus:ring-red-500': field.error !== '',
                         'text-gray-900 ring-gray-300 placeholder:text-gray-400 focus:ring-sky-600': field.error === ''
                       }}
                       placeholder="4"/>
                  </div>
                  <button type="submit" disabled={addModuleGradeForm.submitting}
                          class="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                    <svg class="-ml-0.5 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor"
                         aria-hidden="true">
                      <path fill-rule="evenodd"
                            d="M2 3.75A.75.75 0 012.75 3h11.5a.75.75 0 010 1.5H2.75A.75.75 0 012 3.75zM2 7.5a.75.75 0 01.75-.75h6.365a.75.75 0 010 1.5H2.75A.75.75 0 012 7.5zM14 7a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02l-1.95-2.1v6.59a.75.75 0 01-1.5 0V9.66l-1.95 2.1a.75.75 0 11-1.1-1.02l3.25-3.5A.75.75 0 0114 7zM2 11.25a.75.75 0 01.75-.75H7A.75.75 0 017 12H2.75a.75.75 0 01-.75-.75z"
                            clip-rule="evenodd"/>
                    </svg>
                    Ajouter
                  </button>
                </div>
              </div>
            }
          </AddGrade.Field>
        </div>
      </AddGrade.Form>
      <Show when={addModuleGradeForm.invalid}>
        <div class="pt-4">
          <Alert content="Le formulaire n'est pas valide" details={getErrors(addModuleGradeForm)} />
        </div>
      </Show>
    </div>
  )
}
