import { useGradesContext } from "~/contexts/gradesContext/GradesContext"

const [, setGradesStore] = useGradesContext()
export const updateStudentTpi = (grade: number): void => {
  setGradesStore("tpi", (g) => grade)
}
