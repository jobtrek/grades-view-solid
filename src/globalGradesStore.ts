import { createStore, type Part } from 'solid-js/store'
import { createMemo } from 'solid-js'
import { average, weightedAverage, weightedAverageFlat } from '~/utils/average'
import { roundTo } from '~/utils/roundTo'

export interface Grades {
  tpi: number | null
  maths: number | null
  soci: number | null
  eng: number | null
  epsic: number | null
  cie: number | null
}

const [grades, setGrades] = createStore<Grades>({
  tpi: null,
  maths: null,
  soci: null,
  eng: null,
  epsic: null,
  cie: null
})

export const addGlobalGrade = (branch: Part<Grades>, newGrade: number): void => {
  setGrades(branch, newGrade)
}

export const allGrades = createMemo(() => {
  let info = null
  if (grades.epsic !== null && grades.cie !== null) {
    info = roundTo(weightedAverageFlat([grades.epsic, grades.cie], [80, 20]))
  } else if (grades.epsic !== null) {
    info = grades.epsic
  } else if (grades.cie !== null) {
    info = grades.cie
  }

  let mathEng = null
  if (grades.maths !== null && grades.eng !== null) {
    mathEng = roundTo(average([grades.maths, grades.eng]))
  } else if (grades.maths !== null) {
    mathEng = grades.maths
  } else if (grades.eng !== null) {
    mathEng = grades.eng
  }

  const forAverageCalc = [
    [grades.tpi, 40],
    [grades.soci, 20],
    [mathEng, 10],
    [info, 30]
  ].filter(([grade]) => grade !== null) as Array<[number, number]>

  return {
    global: forAverageCalc.length > 0 ? roundTo(weightedAverage(forAverageCalc)) : null,
    maths: grades.maths,
    info,
    mathEng,
    tpi: grades.tpi,
    soci: grades.soci,
    eng: grades.eng,
    epsic: grades.epsic,
    cie: grades.cie
  }
})
