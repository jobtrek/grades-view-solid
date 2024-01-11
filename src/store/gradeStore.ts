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
import { average, weightedAverage, weightedAverageFlat } from '~/utils/average'

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

const createStudentModuleAverageMemo = (moduleListName: keyof TechnicalDomains) => {
  return createMemo<number | null>(() => {
    const moduleList = gradesStore.info[moduleListName]
    const moduleGrades = moduleList.map(module => module.grade)
    const moduleGradesFiltered = moduleGrades.filter(grade => grade !== null)
    return moduleGradesFiltered.length > 0 ? roundTo(average(moduleGradesFiltered), 10) : null
  })
}

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

const allGradesMemo = createMemo(() => {
  const epsicGrade = createStudentModuleAverageMemo('epsic')
  const cieGrade = createStudentModuleAverageMemo('cie')
  let info = null
  if (epsicGrade() !== null && cieGrade() !== null) {
    info = roundTo(weightedAverageFlat([epsicGrade(), cieGrade()], [80, 20]))
  } else if (epsicGrade() !== null) {
    info = epsicGrade()
  } else if (cieGrade() !== null) {
    info = cieGrade()
  }

  const mathGrade = createStudentGeneralBranchAverageMemo('math')
  const engGrade = createStudentGeneralBranchAverageMemo('eng')
  let mathEng = null
  if (mathGrade() !== null && engGrade() !== null) {
    mathEng = roundTo(average([mathGrade(), engGrade()]))
  } else if (mathGrade() !== null) {
    mathEng = mathGrade()
  } else if (engGrade() !== null) {
    mathEng = engGrade()
  }

  const sociGrade = createStudentGeneralBranchAverageMemo('overallCulture')
  const forAverageCalc = [
    [gradesStore.tpi, 40],
    [sociGrade(), 20],
    [mathEng, 10],
    [info, 30]
  ].filter(([grade]) => grade !== null) as Array<[number, number]>

  return {
    global: forAverageCalc.length > 0 ? roundTo(weightedAverage(forAverageCalc)) : null,
    maths: mathGrade(),
    info,
    mathEng,
    tpi: gradesStore.tpi,
    soci: sociGrade(),
    eng: engGrade(),
    epsic: epsicGrade(),
    cie: cieGrade()
  }
})

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
  createStudentModuleAverageMemo,
  createStudentGeneralBranchAverageMemo,
  createStudentGeneralBranchSemesterAverageMemo,
  allGradesMemo,
  updateStudentName,
  addTechnicalModuleGrade,
  updateTechnicalModuleGrade,
  addGeneralKnowledgeSemester,
  addGradeToGeneralKnowledgeSemester
}
