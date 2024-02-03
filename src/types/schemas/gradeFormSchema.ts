import { type Input, object } from "valibot"
import { GradeSchema } from "~/types/models/GradeStoreModels"

const gradeSchemaLabels = {
  grade: "Note",
}

const AddGradeSchema = object({
  grade: GradeSchema,
} satisfies Record<keyof typeof gradeSchemaLabels, any>)

type AddGradeForm = Input<typeof AddGradeSchema>

export { AddGradeSchema, type AddGradeForm, gradeSchemaLabels }
