import { createContext, type ParentComponent, useContext } from "solid-js"
import { type StudentGrades } from "~/types/models/GradeStoreModels"
import { initialGradesStoreData } from "~/data/initialGradesStoreData"
import { createStore, type SetStoreFunction } from "solid-js/store"
import { makePersisted } from "@solid-primitives/storage"

export const makeGradesContext = (
  initialDate: StudentGrades,
): readonly [StudentGrades, SetStoreFunction<StudentGrades>] => {
  const [gradesStore, setGradesStore] = createStore(initialDate)
  const [persistedGradesStore, setPersistedGradesStore] = makePersisted(
    [gradesStore, setGradesStore],
    { name: "grade-store-context" },
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

export const useGradesContext: () => readonly [
  StudentGrades,
  SetStoreFunction<StudentGrades>,
] = () => useContext(GradesContext)
