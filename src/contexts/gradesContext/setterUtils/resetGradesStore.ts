import { batch } from "solid-js"
import { useGradesContext } from "~/contexts/gradesContext/GradesContext"

const [, setGradesStore] = useGradesContext()
export const resetGradesStore = (): void => {
  batch(() => {
    setGradesStore("tpi", null)
    setGradesStore("name", "")
    setGradesStore("info", "cie", [])
    setGradesStore("info", "epsic", [])
    setGradesStore("generalKnowledge", "eng", { semesters: [] })
    setGradesStore("generalKnowledge", "math", { semesters: [] })
    setGradesStore("generalKnowledge", "overallCulture", { semesters: [] })
  })
}
