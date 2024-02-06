import {
  array,
  type Input,
  maxLength,
  maxValue,
  merge,
  minLength,
  minValue,
  multipleOf,
  nullable,
  number,
  object,
  string,
} from "valibot"

export const GradeSchema = number([
  maxValue(6, "La note ne peut pas être supérieure à 6"),
  minValue(1, "La note ne peut pas être inférieure à 1"),
  multipleOf(0.5, "La note ne peut être qu'un multiple de 0.5"),
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

export const ModulesListSchema = array(ModuleWithGradeSchema)
export type ModulesList = Input<typeof ModulesListSchema>

export const TechnicalDomainsSchema = object({
  epsic: ModulesListSchema,
  cie: ModulesListSchema,
})
export type TechnicalDomains = Input<typeof TechnicalDomainsSchema>

export const BranchSchema = object({
  maxSemesters: number([
    maxValue(8, "Il est impossible d'avoir plus de 8 semestres."),
  ]),
  semesters: SemesterListSchema,
})
export type Branch = Input<typeof BranchSchema>

export const GeneralKnowledgeSchema = object({
  math: BranchSchema,
  eng: BranchSchema,
  overallCulture: BranchSchema,
})
export type GeneralKnowledge = Input<typeof GeneralKnowledgeSchema>

export const StudentGradesSchema = object({
  version: string(),
  name: string([
    maxLength(40, "Le nom ne peut pas faire plus de 40 caractères."),
  ]),
  tpi: NullableGradeSchema,
  info: TechnicalDomainsSchema,
  generalKnowledge: GeneralKnowledgeSchema,
})
export type StudentGrades = Input<typeof StudentGradesSchema>
