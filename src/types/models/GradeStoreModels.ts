import {
  array,
  type InferInput,
  maxLength,
  maxValue,
  minLength,
  minValue,
  multipleOf,
  nullable,
  number,
  object, pipe,
  string
} from "valibot"

export const GradeSchema = pipe(
  number(),
  maxValue(6, "La note ne peut pas être supérieure à 6"),
  minValue(1, "La note ne peut pas être inférieure à 1"),
  multipleOf(0.5, "La note ne peut être qu'un multiple de 0.5"),
)
export type Grade = InferInput<typeof GradeSchema>

export const NullableGradeSchema = nullable(GradeSchema)
export type NullableGrade = InferInput<typeof NullableGradeSchema>

export const SemesterSchema = array(GradeSchema)
export type Semester = InferInput<typeof SemesterSchema>

export const SemesterListSchema = array(SemesterSchema)
export type SemesterList = InferInput<typeof SemesterListSchema>

export const ModuleSchema = object({
  description: pipe(
    string(),
    minLength(1, "La description ne peut pas être vide"),
    maxLength(500, "La description ne peut pas dépasser 500 caractères"),
  ),
  no: number(),
})
export type Module = InferInput<typeof ModuleSchema>

export const ModuleWithGradeSchema = object({
  ...ModuleSchema.entries,
  grade: GradeSchema,
})
export type ModuleWithGrade = InferInput<typeof ModuleWithGradeSchema>

export const ModulesListSchema = array(ModuleWithGradeSchema)
export type ModulesList = InferInput<typeof ModulesListSchema>

export const TechnicalDomainsSchema = object({
  epsic: ModulesListSchema,
  cie: ModulesListSchema,
})
export type TechnicalDomains = InferInput<typeof TechnicalDomainsSchema>

export const BranchSchema = object({
  maxSemesters: pipe(
    number(),
    maxValue(8, "Il est impossible d'avoir plus de 8 semestres."),
  ),
  semesters: SemesterListSchema,
})
export type Branch = InferInput<typeof BranchSchema>

export const GeneralKnowledgeSchema = object({
  math: BranchSchema,
  eng: BranchSchema,
  overallCulture: BranchSchema,
})
export type GeneralKnowledge = InferInput<typeof GeneralKnowledgeSchema>

export const StudentGradesSchema = object({
  version: string(),
  name: pipe(
    string(),
    maxLength(40, "Le nom ne peut pas faire plus de 40 caractères."),
  ),
  tpi: NullableGradeSchema,
  info: TechnicalDomainsSchema,
  generalKnowledge: GeneralKnowledgeSchema,
})
export type StudentGrades = InferInput<typeof StudentGradesSchema>
