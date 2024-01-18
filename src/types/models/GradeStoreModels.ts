type Grade = number
type NullableGrade = Grade | null
type Semester = number[]
type SemesterList = Semester[]

export interface Module {
  description: string
  no: number
}

export interface ModuleGrade extends Module {
  grade: number
}

type ModulesList = ModuleGrade[]

interface TechnicalDomains {
  epsic: ModulesList
  cie: ModulesList
}

export interface GeneralKnowledge {
  math: Branch
  eng: Branch
  overallCulture: Branch
}

export interface Branch {
  maxSemesters: number
  semesters: SemesterList
}

interface StudentGrades {
  name: string
  tpi: NullableGrade
  info: TechnicalDomains
  generalKnowledge: GeneralKnowledge
}

export type { StudentGrades, TechnicalDomains }
