import { type Input, maxValue, minValue, number, object } from "valibot"

const gradeSchemaLabels = {
  grade: "Note",
}

const AddGradeSchema = object({
  grade: number("La note doit être un nombre entre 1 et 6", [
    maxValue(6, "La note ne peut pas être supérieure à 6"),
    minValue(1, "La note ne peut pas être inférieure à 1"),
  ]),
} satisfies Record<keyof typeof gradeSchemaLabels, any>)

type AddGradeForm = Input<typeof AddGradeSchema>

export { AddGradeSchema, type AddGradeForm, gradeSchemaLabels }
