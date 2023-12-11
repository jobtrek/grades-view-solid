import { createStore, type Part } from 'solid-js/store'
import { createMemo } from 'solid-js'
import { weightedAverage } from '~/utils/average'

export interface Grades {
  maths: number[]
  soci: number[]
  eng: number[]
  epsic: number[]
  cie: number[]
}

const [grades, setGrades] = createStore<Grades>({
  maths: [],
  soci: [],
  eng: [],
  epsic: [],
  cie: []
})

export const addGlobalGrade = (branch: Part<Grades>, newGrade: number): void => {
  setGrades(branch, grade => [newGrade, ...grade])
}

export const allGrades = createMemo(() => {
  let info = null
  if (grades.epsic.length > 0 && grades.cie.length > 0) {
    info = weightedAverage([grades.epsic[0], grades.cie[0]], [80, 20])
  } else if (grades.epsic.length > 0 && grades.cie.length === 0) {
    info = grades.epsic[0]
  } else if (grades.epsic.length === 0 && grades.cie.length > 0) {
    info = grades.cie[0]
  }

  return {
    maths: grades.maths[0] ?? null,
    info
  }
})
