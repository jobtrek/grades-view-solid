import { createStore } from 'solid-js/store'
import { type StudentGrades } from '~/store/GradeStoreModels'
import { createMemo } from 'solid-js'
import { makePersisted } from '@solid-primitives/storage'

// Global store
const [gradesStore, setGradesStore] = makePersisted(
  createStore<StudentGrades>({
    name: '',
    tpi: null,
    info: {
      episc: [],
      cie: []
    },
    generalKnowledge: {
      math: {
        maxSemesters: 3,
        semesters: []
      },
      eng: {
        maxSemesters: 5,
        semesters: []
      }
    },
    overallCulture: {
      maxSemesters: 8,
      semesters: []
    }
  }),
  { name: 'grade-store' }
)

const studentNameMemo = createMemo<string>(() => {
  return gradesStore.name
})

const updateStudentName = (name: string): void => {
  setGradesStore('name', n => name)
}

export {
  studentNameMemo,
  updateStudentName
}
