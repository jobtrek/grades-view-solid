import { type Component, createSignal, Show } from "solid-js"
import { NavButton } from "~/components/navigation/NavButton"
import { parse, ValiError } from "valibot"
import { StudentGradesSchema } from "~/types/models/GradeStoreModels"
import { importDataToStore } from "~/contexts/gradesContext/setterUtils/importDataToStore"
import DisappearingNotification from "~/components/utils/DisappearingNotification"
import { Alert, type AlertTypes } from "~/components/utils/Alert"
import { initialGradesStoreData } from "~/data/initialGradesStoreData"
import { cieModules } from "~/data/cieModules"
import { epsicModules } from "~/data/epsicModules"

/**
 * A special component to simulate a file input, but only with a button.
 */
export const FileButton: Component = () => {
  const [notification, setNotification] = createSignal<{
    name: string
    type: AlertTypes
    messages: Record<string, string>
  } | null>(null)
  let fileInput: HTMLInputElement | undefined

  const handleClick = (): void => {
    if (fileInput == null) return
    fileInput.click()
  }

  const handleReset = (): void => {
    setNotification(null)
  }

  const handleFileChange = async (): Promise<void> => {
    if (fileInput == null) return
    if (fileInput.files?.length === 1) {
      const file = await fileInput.files[0].text()
      const json = JSON.parse(file)
      try {
        // TODO : Refactor these check to be more readable (extract to schema validation ?)
        // Check if json structure satisfies the schema
        const validatedSchema = parse(StudentGradesSchema, json)
        // Check that semester is correct length
        Object.entries(validatedSchema.generalKnowledge).forEach(
          ([key, value]) => {
            if (
              value.semesters.length >
              // @ts-expect-error : semester exist because schema is validated on line 40
              initialGradesStoreData.generalKnowledge[key].maxSemesters
            ) {
              throw new Error(
                "Un ou plusieurs semestres contiennent trop de notes",
              )
            }
          },
        )
        // Check that modules exists
        validatedSchema.info.cie.forEach((module) => {
          if (
            !cieModules.some(
              (m) => m.no === module.no && m.description === module.description,
            )
          ) {
            throw new Error("Un ou plusieurs modules cie ne sont pas valides")
          }
        })
        validatedSchema.info.epsic.forEach((module) => {
          if (
            !epsicModules.some(
              (m) => m.no === module.no && m.description === module.description,
            )
          ) {
            throw new Error("Un ou plusieurs modules epsic ne sont pas valides")
          }
        })
        importDataToStore(validatedSchema)
        setNotification({
          name: "L'importation a réussi",
          type: "success",
          messages: {},
        })
      } catch (error) {
        if (error instanceof ValiError) {
          setNotification({
            name: "L'importation a échoué, les données n'ont pas le bon format",
            type: "error",
            messages: error.issues.reduce((acc, issue) => {
              return {
                ...acc,
                [issue.path[0].key]: issue.message,
              }
            }, {}),
          })
        } else {
          setNotification({
            // @ts-expect-error : error is an instance of Error
            name: error.message,
            type: "error",
            messages: {},
          })
        }
      }
    } else {
      setNotification({
        name: "Aucun fichier sélectionné",
        type: "warning",
        messages: {},
      })
    }
    fileInput.value = ""
  }

  return (
    <>
      <div class="hidden">
        <input
          ref={fileInput}
          type="file"
          accept=".json"
          onChange={() => handleFileChange}
        />
      </div>
      <NavButton name="Import" actionOnClick={handleClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-6 h-6"
        >
          <path d="M12 1.5a.75.75 0 0 1 .75.75V7.5h-1.5V2.25A.75.75 0 0 1 12 1.5ZM11.25 7.5v5.69l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V7.5h3.75a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h3.75Z" />
        </svg>
      </NavButton>
      <Show when={notification()}>
        {(notification) => (
          <DisappearingNotification onReset={handleReset}>
            <Alert
              content={notification().name}
              type={notification().type}
              details={notification().messages}
            />
          </DisappearingNotification>
        )}
      </Show>
    </>
  )
}

export default FileButton
