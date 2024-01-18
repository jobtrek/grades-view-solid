import type { SetStoreFunction } from "solid-js/store"
import type { StudentGrades } from "~/data/GradeStoreModels"

export const updateStudentName = (
  setGradesStore: SetStoreFunction<StudentGrades>,
  name: string,
): void => {
  setGradesStore("name", (n) => name)
}
