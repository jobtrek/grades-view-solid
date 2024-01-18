import { createStore } from "solid-js/store"
import {
  type GeneralKnowledge,
  type Module,
  type ModuleGrade,
  type StudentGrades,
  type TechnicalDomains,
} from "~/data/GradeStoreModels"
import { type Accessor, batch, createMemo } from "solid-js"
import { makePersisted } from "@solid-primitives/storage"
import { roundTo } from "~/utils/roundTo"
import { average, weightedAverage, weightedAverageFlat } from "~/utils/average"
import { initialGradesStoreData } from "~/data/initialGradesStoreData"

// Global store

const createStudentModuleAverageMemo = (
  moduleListName: keyof TechnicalDomains,
): Accessor<number | null> => {
  return createMemo<number | null>(() => {
    const moduleList = gradesStore.info[moduleListName]
    const moduleGrades = moduleList.map((module) => module.grade)
    const moduleGradesFiltered = moduleGrades.filter((grade) => grade !== null)
    return moduleGradesFiltered.length > 0
      ? roundTo(average(moduleGradesFiltered), 2)
      : null
  })
}

export const createAvailableModuleMemo = (
  moduleListName: keyof TechnicalDomains,
  moduleList: Module[],
): Accessor<Module[]> => {
  return createMemo<Module[]>(() => {
    const actualModules = gradesStore.info[moduleListName]
    return moduleList.filter(
      (module) => !actualModules.map((m) => m.no).includes(module.no),
    )
  })
}

const createStudentGeneralBranchAverageMemo = (
  branchName: keyof GeneralKnowledge,
): Accessor<number | null> => {
  return createMemo<number | null>(() => {
    const branch = gradesStore.generalKnowledge[branchName]
    const semesterAverages = branch.semesters.map((semester) =>
      semester.length > 0 ? roundTo(average(semester), 2) : null,
    )
    const filteredAverages = semesterAverages.filter(
      (average) => average !== null,
    ) as number[]
    return filteredAverages.length > 0
      ? roundTo(average(filteredAverages), 10)
      : null
  })
}

const createStudentGeneralBranchSemesterAverageMemo = (
  branchName: keyof GeneralKnowledge,
  semesterNumber: number,
): Accessor<number | null> => {
  return createMemo<number | null>(() => {
    const semesterGrades =
      gradesStore.generalKnowledge[branchName].semesters[semesterNumber]
    return semesterGrades.length > 0
      ? roundTo(average(semesterGrades), 2)
      : null
  })
}

export const epsicAverageMemo = createStudentModuleAverageMemo("epsic")
export const cieAverageMemo = createStudentModuleAverageMemo("cie")

export const mathAverageMemo = createStudentGeneralBranchAverageMemo("math")
export const engAverageMemo = createStudentGeneralBranchAverageMemo("eng")

export const sociAverageMemo =
  createStudentGeneralBranchAverageMemo("overallCulture")

export const infoAverageMemo = createMemo(() => {
  let info = null
  if (epsicAverageMemo() !== null && cieAverageMemo() !== null) {
    info = roundTo(
      weightedAverageFlat([epsicAverageMemo(), cieAverageMemo()], [80, 20]),
    )
  } else if (epsicAverageMemo() !== null) {
    info = epsicAverageMemo()
  } else if (cieAverageMemo() !== null) {
    info = cieAverageMemo()
  }
  return info
})

export const mathEngAverageMemo = createMemo(() => {
  let mathEng = null
  if (mathAverageMemo() !== null && engAverageMemo() !== null) {
    mathEng = roundTo(average([mathAverageMemo(), engAverageMemo()]), 2)
  } else if (mathAverageMemo() !== null) {
    mathEng = mathAverageMemo()
  } else if (engAverageMemo() !== null) {
    mathEng = engAverageMemo()
  }
  return mathEng
})

export const generalAverageMemo = createMemo(() => {
  const forAverageCalc = [
    [gradesStore.tpi, 30],
    [sociAverageMemo(), 20],
    [mathEngAverageMemo(), 20],
    [infoAverageMemo(), 30],
  ].filter(([grade]) => grade !== null) as Array<[number, number]>
  return forAverageCalc.length > 0
    ? roundTo(weightedAverage(forAverageCalc))
    : null
})

export {
  gradesStore,
  resetStore,
  createStudentModuleAverageMemo,
  createStudentGeneralBranchAverageMemo,
  createStudentGeneralBranchSemesterAverageMemo,
}
