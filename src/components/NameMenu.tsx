import { type Component, createEffect, Show } from 'solid-js'
import { gradesStore, updateStudentName } from '~/store/gradeStore'
import { object, string, maxLength, minLength, type Input } from 'valibot'
import { createForm, getErrors, setValue, type SubmitHandler, valiForm } from '@modular-forms/solid'
import { Alert } from '~/components/Alert'
import DisappearingNotification from '~/components/DisappearingNotification'

const StudentNameSchema = object({
  studentName: string([
    maxLength(40, 'Le nom ne peut pas être plus long.'),
    minLength(1, 'Le nom doit contenir au minimum un caractère.')
  ])
})

type StudentGradeForm = Input<typeof StudentNameSchema>

export const NameMenu: Component = () => {
  const [updateStudentForm, UpdateStudent] = createForm<StudentGradeForm>({
    validate: valiForm(StudentNameSchema)
  })

  createEffect(() => {
    setValue(updateStudentForm, 'studentName', gradesStore.name, { shouldValidate: false })
  })

  const handleSubmit: SubmitHandler<StudentGradeForm> = (values) => {
    updateStudentName(values.studentName)
  }

  return (
      <UpdateStudent.Form class="col-span-1" onSubmit={handleSubmit}>
        <UpdateStudent.Field name="studentName" type="string">
          {(field, props) =>
            <>
              <label for={field.name} class="sr-only">Nom de l'apprenti</label>
              <div class="mt-2 flex rounded-md shadow-sm">
                <div class="relative flex flex-grow items-stretch focus-within:z-10">
                  <div
                    class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor"
                         aria-hidden="true">
                      <path
                        d="M7 8a3 3 0 100-6 3 3 0 000 6zM14.5 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM1.615 16.428a1.224 1.224 0 01-.569-1.175 6.002 6.002 0 0111.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 017 18a9.953 9.953 0 01-5.385-1.572zM14.5 16h-.106c.07-.297.088-.611.048-.933a7.47 7.47 0 00-1.588-3.755 4.502 4.502 0 015.874 2.636.818.818 0 01-.36.98A7.465 7.465 0 0114.5 16z"/>
                    </svg>
                  </div>
                  <input
                    {...props}
                    type="text"
                    name={field.name}
                    id={field.name}
                    value={field.value ?? gradesStore.name}
                    class="block w-full rounded-md border-0 py-1.5 pl-10 ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                    classList={{
                      'text-red-900 ring-red-300 placeholder:text-red-300 focus:ring-red-500': field.error !== '',
                      'text-gray-900 ring-gray-300 placeholder:text-gray-400 focus:ring-sky-600': field.error === ''
                    }}
                    placeholder="Nom de l'apprenti"
                  />
                </div>
              </div>
            </>
          }
        </UpdateStudent.Field>
        <Show when={updateStudentForm.invalid}>
          <DisappearingNotification>
            <Alert content="Le formulaire n'est pas valide" details={getErrors(updateStudentForm)} />
          </DisappearingNotification>
        </Show>
      </UpdateStudent.Form>
  )
}
