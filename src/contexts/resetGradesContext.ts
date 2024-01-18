import { batch } from "solid-js"
import { type SetStoreFunction } from "solid-js/store"
import { type StudentGrades } from "~/data/GradeStoreModels"

export const resetGradesStore = (
  setGradesStore: SetStoreFunction<StudentGrades>,
  grade: number,
): void => {
  batch(() => {
    setGradesStore("tpi", null)
    setGradesStore("name", "")
    setGradesStore("info", "cie", [])
    setGradesStore("info", "epsic", [])
    setGradesStore("generalKnowledge", "eng", { semesters: [] })
    setGradesStore("generalKnowledge", "math", { semesters: [] })
    setGradesStore("generalKnowledge", "overallCulture", { semesters: [] })
  })
}
