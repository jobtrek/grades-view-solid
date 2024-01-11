import { createStore } from 'solid-js/store'
import {
  type GeneralKnowledge,
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

const studentTpiGradeMemo = createMemo<number | null>(() => {
  return gradesStore.tpi ?? null
})

const createStudentModuleAverageMemo = (moduleListName: keyof TechnicalDomains) => {
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

const createStudentGeneralBranchAverageMemo = (branchName: keyof GeneralKnowledge): Accessor<number | null> => {
  return createMemo<number | null>(() => {
    const branch = gradesStore.generalKnowledge[branchName]
    const semesterAverages = branch.semesters.map(semester => semester.length > 0 ? roundTo(average(semester), 10) : null)
    const filteredAverages = semesterAverages.filter(average => average !== null) as number[]
    return filteredAverages.length > 0 ? roundTo(average(filteredAverages), 10) : null
  })
}

const createStudentGeneralBranchSemesterAverageMemo = (branchName: keyof GeneralKnowledge, semesterNumber: number): Accessor<number | null> => {
  return createMemo<number | null>(() => {
    const semesterGrades = gradesStore.generalKnowledge[branchName].semesters[semesterNumber]
    return semesterGrades.length > 0 ? roundTo(average(semesterGrades), 10) : null
  })
}

const updateStudentName = (name: string): void => {
  setGradesStore('name', n => name)
}

const addTechnicalModuleGrade = (domain: keyof TechnicalDomains, module: ModuleGrade): void => {
  setGradesStore('info', domain, m => [...m, module])
}

const updateTechnicalModuleGrade = (domain: keyof TechnicalDomains, module: ModuleGrade): void => {
  setGradesStore('info', domain, m => m.no === module.no, { grade: module.grade })
}

const addGeneralKnowledgeSemester = (branch: keyof GeneralKnowledge): void => {
  setGradesStore('generalKnowledge', branch, 'semesters', b => [...b, []])
}

const addGradeToGeneralKnowledgeSemester = (branch: keyof GeneralKnowledge, semesterNumber: number, grade: number): void => {
  setGradesStore('generalKnowledge', branch, 'semesters', semesterNumber, s => [...s, grade])
}

export {
  gradesStore,
  studentTpiGradeMemo,
  createStudentModuleAverageMemo,
  createStudentGeneralBranchAverageMemo,
  createStudentGeneralBranchSemesterAverageMemo,
  updateStudentName,
  addTechnicalModuleGrade,
  updateTechnicalModuleGrade,
  addGeneralKnowledgeSemester,
  addGradeToGeneralKnowledgeSemester
}
