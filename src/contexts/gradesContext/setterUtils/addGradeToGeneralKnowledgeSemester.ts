import type { GeneralKnowledge } from "~/data/GradeStoreModels"
import { useGradesContext } from "~/contexts/gradesContext/GradesContext"

const [, setGradesStore] = useGradesContext()
export const addGradeToGeneralKnowledgeSemester = (
  branch: keyof GeneralKnowledge,
  semesterNumber: number,
  grade: number,
): void => {
  setGradesStore(
    "generalKnowledge",
    branch,
    "semesters",
    semesterNumber,
    (s) => [...s, grade],
  )
}
