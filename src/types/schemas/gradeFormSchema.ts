import {
  type Input,
  maxValue,
  minValue,
  multipleOf,
  number,
  object,
} from "valibot"

const gradeSchemaLabels = {
  grade: "Note",
}

const AddGradeSchema = object({
  grade: number("La note doit être un nombre entre 1 et 6", [
    maxValue(6, "La note ne peut pas être supérieure à 6"),
    minValue(1, "La note ne peut pas être inférieure à 1"),
    multipleOf(0.5, "La note ne peut être qu'un multiple de 0.5"),
  ]),
} satisfies Record<keyof typeof gradeSchemaLabels, any>)

type AddGradeForm = Input<typeof AddGradeSchema>

export { AddGradeSchema, type AddGradeForm, gradeSchemaLabels }
