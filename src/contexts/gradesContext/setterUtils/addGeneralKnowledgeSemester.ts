import type { GeneralKnowledge } from "~/types/models/GradeStoreModels"
import { useGradesContext } from "~/contexts/gradesContext/GradesContext"

const [gradesStore, setGradesStore] = useGradesContext()
export const addGeneralKnowledgeSemester = (
  branch: keyof GeneralKnowledge,
): void => {
  if (
    gradesStore.generalKnowledge[branch].semesters.length <
    gradesStore.generalKnowledge[branch].maxSemesters
  ) {
    setGradesStore("generalKnowledge", branch, "semesters", (b) => [...b, []])
  }
}
