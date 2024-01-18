import type { SetStoreFunction } from "solid-js/store"
import type { GeneralKnowledge, StudentGrades } from "~/data/GradeStoreModels"

export const addGeneralKnowledgeSemester = (
  setGradesStore: SetStoreFunction<StudentGrades>,
  branch: keyof GeneralKnowledge,
): void => {
  setGradesStore("generalKnowledge", branch, "semesters", (b) => [...b, []])
}
