import { type InferInput, object } from "valibot"
import { GradeSchema } from "~/types/models/GradeStoreModels"

const gradeSchemaLabels = {
  grade: "Note",
}

const AddGradeSchema = object({
  grade: GradeSchema,
} satisfies Record<keyof typeof gradeSchemaLabels, unknown>)

type AddGradeForm = InferInput<typeof AddGradeSchema>

export { AddGradeSchema, type AddGradeForm, gradeSchemaLabels }
