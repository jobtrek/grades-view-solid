import { useGradesContext } from "~/contexts/gradesContext/GradesContext"

const [, setGradesStore] = useGradesContext()
export const updateStudentName = (name: string): void => {
  setGradesStore("name", (n) => name)
}
