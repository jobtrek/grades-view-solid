import {
  array,
  type Input,
  maxLength,
  maxValue,
  merge,
  minLength,
  minValue,
  nullable,
  number,
  object,
  string,
} from "valibot"

export const GradeSchema = number([
  maxValue(6, "La note ne peut pas être supérieure à 6"),
  minValue(1, "La note ne peut pas être inférieure à 1"),
])
export type Grade = Input<typeof GradeSchema>

export const NullableGradeSchema = nullable(GradeSchema)
export type NullableGrade = Input<typeof NullableGradeSchema>

export const SemesterSchema = array(GradeSchema)
export type Semester = Input<typeof SemesterSchema>

export const SemesterListSchema = array(SemesterSchema)
export type SemesterList = Input<typeof SemesterListSchema>

export const ModuleSchema = object({
  description: string([
    minLength(1, "La description ne peut pas être vide"),
    maxLength(500, "La description ne peut pas dépasser 500 caractères"),
  ]),
  no: number(),
})
export type Module = Input<typeof ModuleSchema>

export const ModuleWithGradeSchema = merge([
  ModuleSchema,
  object({
    grade: GradeSchema,
  }),
])
export type ModuleWithGrade = Input<typeof ModuleWithGradeSchema>

type ModulesList = ModuleWithGrade[]

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
