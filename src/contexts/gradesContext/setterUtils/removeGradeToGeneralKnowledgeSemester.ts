import type { GeneralKnowledge } from "~/types/models/GradeStoreModels"
import { useGradesContext } from "~/contexts/gradesContext/GradesContext"

const [, setGradesStore] = useGradesContext()
export const removeGradeToGeneralKnowledgeSemester = (
  branch: keyof GeneralKnowledge,
  semesterNumber: number,
  gradeIndex: number,
): void => {
  setGradesStore("generalKnowledge", branch, "semesters", semesterNumber, (s) =>
    s.filter((_, i) => i !== gradeIndex),
  )
}
