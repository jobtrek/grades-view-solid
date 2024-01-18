import type { GeneralKnowledge } from "~/types/models/GradeStoreModels"
import { useGradesContext } from "~/contexts/gradesContext/GradesContext"

const [, setGradesStore] = useGradesContext()
export const addGeneralKnowledgeSemester = (
  branch: keyof GeneralKnowledge,
): void => {
  setGradesStore("generalKnowledge", branch, "semesters", (b) => [...b, []])
}
