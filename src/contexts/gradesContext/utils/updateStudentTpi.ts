import type { SetStoreFunction } from "solid-js/store"
import type { StudentGrades } from "~/data/GradeStoreModels"

export const updateStudentTpi = (
  setGradesStore: SetStoreFunction<StudentGrades>,
  grade: number,
): void => {
  setGradesStore("tpi", (g) => grade)
}
