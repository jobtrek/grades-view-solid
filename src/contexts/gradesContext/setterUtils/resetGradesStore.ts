import { batch } from "solid-js"
import { useGradesContext } from "~/contexts/gradesContext/GradesContext"
import { initialGradesStoreData } from "~/data/initialGradesStoreData"

const [, setGradesStore] = useGradesContext()
export const resetGradesStore = (): void => {
  batch(() => {
    setGradesStore("tpi", initialGradesStoreData.tpi)
    setGradesStore("version", initialGradesStoreData.version)
    setGradesStore("name", initialGradesStoreData.name)
    setGradesStore("info", "cie", [])
    setGradesStore("info", "epsic", [])
    setGradesStore("generalKnowledge", "eng", {
      semesters: [],
      maxSemesters: initialGradesStoreData.generalKnowledge.eng.maxSemesters,
    })
    setGradesStore("generalKnowledge", "math", {
      semesters: [],
      maxSemesters: initialGradesStoreData.generalKnowledge.math.maxSemesters,
    })
    setGradesStore("generalKnowledge", "overallCulture", {
      semesters: [],
      maxSemesters:
        initialGradesStoreData.generalKnowledge.overallCulture.maxSemesters,
    })
  })
}
