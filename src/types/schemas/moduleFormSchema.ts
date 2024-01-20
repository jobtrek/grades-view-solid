import { type Input, maxValue, minValue, number, object, string } from "valibot"

const addModuleSchemaLabels = {
  grade: "Note",
  module: "Module",
}

const AddModuleGradeSchema = object({
  grade: number([
    maxValue(6, "La note ne peut pas être supérieure à 6"),
    minValue(1, "La note ne peut pas être inférieure à 1"),
  ]),
  module: string(),
} satisfies Record<keyof typeof addModuleSchemaLabels, any>)

type AddModuleGradeForm = Input<typeof AddModuleGradeSchema>

export { AddModuleGradeSchema, type AddModuleGradeForm, addModuleSchemaLabels }
