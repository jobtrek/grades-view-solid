import type { SetStoreFunction } from "solid-js/store"
import type { GeneralKnowledge, StudentGrades } from "~/data/GradeStoreModels"

export const addGradeToGeneralKnowledgeSemester = (
  setGradesStore: SetStoreFunction<StudentGrades>,
  branch: keyof GeneralKnowledge,
  semesterNumber: number,
  gradeIndex: number,
): void => {
  setGradesStore("generalKnowledge", branch, "semesters", semesterNumber, (s) =>
    s.filter((_, i) => i !== gradeIndex),
  )
}
