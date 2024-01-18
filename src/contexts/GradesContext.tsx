import { createContext, type ParentComponent, useContext } from "solid-js"
import { type StudentGrades } from "~/data/GradeStoreModels"
import { initialGradesStoreData } from "~/data/initialGradesStoreData"
import { createStore } from "solid-js/store"
import { makePersisted } from "@solid-primitives/storage"

export const makeGradesContext = (initialDate: StudentGrades) => {
  const [gradesStore, setGradesStore] = createStore(initialDate)
  const [persistedGradesStore, setPersistedGradesStore] = makePersisted(
    [gradesStore, setGradesStore],
    { name: "grade-store" },
  )

  return [persistedGradesStore, setPersistedGradesStore] as const
}

type GradesContextType = ReturnType<typeof makeGradesContext>

export const GradesContext = createContext<GradesContextType>(
  makeGradesContext(initialGradesStoreData),
)

export const GradesProvider: ParentComponent = (props) => {
  return (
    <GradesContext.Provider value={makeGradesContext(initialGradesStoreData)}>
      {props.children}
    </GradesContext.Provider>
  )
}

export const useGradesContext = () => useContext(GradesContext)
