import { type Input, object, string } from "valibot"
import { GradeSchema } from "~/types/models/GradeStoreModels"

const addModuleSchemaLabels = {
  grade: "Note",
  module: "Module",
}

const AddModuleGradeSchema = object({
  grade: GradeSchema,
  module: string(),
} satisfies Record<keyof typeof addModuleSchemaLabels, any>)

type AddModuleGradeForm = Input<typeof AddModuleGradeSchema>

export { AddModuleGradeSchema, type AddModuleGradeForm, addModuleSchemaLabels }
