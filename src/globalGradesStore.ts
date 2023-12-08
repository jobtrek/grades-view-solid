import { createStore, type Part } from 'solid-js/store'
import { createMemo } from 'solid-js'

interface Grades {
  maths: number | null
  soci: number | null
  eng: number | null
  epsic: number | null
  cie: number | null
}

const [grades, setGrades] = createStore<Grades>({
  maths: null,
  soci: null,
  eng: null,
  epsic: null,
  cie: null
})

export const setGlobalGrade = (branch: Part<Grades>, grade: number | null): void => {
  setGrades(branch, grade)
}

export const allGrades = createMemo(() => {
  let info
  if (grades.epsic === null && grades.cie === null) {
    info = null
  } else if (grades.cie !== null && grades.epsic === null) {
    info = grades.cie
  } else if (grades.cie === null && grades.epsic !== null) {
    info = grades.epsic
  } else {
    info = (grades.epsic * 8 + grades.cie * 2) / 10
  }

  return {
    info
  }
})
