import { createStore } from 'solid-js/store'
import {
  type ModuleGrade,
  type StudentGrades,
  type TechnicalDomains
} from '~/store/GradeStoreModels'
import { type Accessor, createMemo } from 'solid-js'
import { makePersisted } from '@solid-primitives/storage'
import { roundTo } from '~/utils/roundTo'
import { average } from '~/utils/average'

// Global store
const [gradesStore, setGradesStore] = makePersisted(
  createStore<StudentGrades>({
    name: '',
    tpi: null,
    info: {
      epsic: [],
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
      },
      overallCulture: {
        maxSemesters: 8,
        semesters: []
      }
    }
  }),
  { name: 'grade-store' }
)

/** const studentNameMemo = createMemo<string>(() => {
  return gradesStore.name
}) */

const studentTpiGradeMemo = createMemo<number | null>(() => {
  return gradesStore.tpi ?? null
})

/** const createStudentModuleGradeMemo = (moduleNumber: number, moduleListName: keyof TechnicalDomains): Accessor<number | null> => {
  return createMemo<number | null>(() => {
    return gradesStore.info[moduleListName].filter(module => module.no === moduleNumber)[0]?.grade ?? null
  })
} */

const createStudentModuleAverageMemo = (moduleListName: keyof TechnicalDomains): Accessor<number | null> => {
  return createMemo<number | null>(() => {
    const moduleList = gradesStore.info[moduleListName]
    const moduleGrades = moduleList.map(module => module.grade)
    const moduleGradesFiltered = moduleGrades.filter(grade => grade !== null)
    return moduleGradesFiltered.length > 0 ? roundTo(average(moduleGradesFiltered), 10) : null
  })
}

/** const createStudentBranchSemesterGrades = (branchName: keyof GeneralKnowledge, semesterNumber: number): Accessor<number[]> => {
  return createMemo<number[]>(() => {
    const branch = gradesStore.generalKnowledge[branchName]
    return branch.semesters[semesterNumber] ?? []
  })
} */

/** const createStudentGeneralBranchAverageMemo = (branchName: keyof GeneralKnowledge): Accessor<number[]> => {
  return createMemo<number | null>(() => {
    const branch = gradesStore.generalKnowledge[branchName]
    const moduleGrades = branch.semesters.reduce((acc, semester) => {
      const semesterAverage = average(semester)
      if (semesterAverage !== null) {
        acc.push(semesterAverage)
      }
      return acc
    })
    const moduleGradesFiltered = moduleGrades.filter(grade => grade !== null)
    return moduleGradesFiltered.length > 0 ? roundTo(average(moduleGradesFiltered), 10) : null
  })
} */

const updateStudentName = (name: string): void => {
  setGradesStore('name', n => name)
}

const addTechnicalModuleGrade = (domain: keyof TechnicalDomains, module: ModuleGrade): void => {
  setGradesStore('info', domain, m => [...m, module])
}

const updateTechnicalModuleGrade = (domain: keyof TechnicalDomains, module: ModuleGrade): void => {
  setGradesStore('info', domain, m => m.no === module.no, { grade: module.grade })
}

export {
  gradesStore,
  studentTpiGradeMemo,
  createStudentModuleAverageMemo,
  updateStudentName,
  addTechnicalModuleGrade,
  updateTechnicalModuleGrade
}
