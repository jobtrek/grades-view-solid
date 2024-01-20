import { useGradesContext } from "~/contexts/gradesContext/GradesContext"
import { type StudentGrades } from "~/types/models/GradeStoreModels"

const [, setGradesStore] = useGradesContext()

export const importDataToStore = (data: StudentGrades): void => {
  setGradesStore(data)
}
