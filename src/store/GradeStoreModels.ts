type Grade = number
type NullableGrade = Grade | null
type Semester = number[]
type SemesterList = Semester[]

interface ModuleGrade {
  no: number
  grade: Grade
  description: string
}

type ModulesList = ModuleGrade[]
interface TechnicalDomains {
  episc: ModulesList
  cie: ModulesList
}

interface GeneralKnowledge {
  math: Branch
  eng: Branch
}

interface Branch {
  maxSemesters: number
  semesters: SemesterList
}

interface StudentGrades {
  name: string | null
  tpi: NullableGrade
  info: TechnicalDomains
  generalKnowledge: GeneralKnowledge
  overallCulture: Branch
}

export type {
  StudentGrades
}
