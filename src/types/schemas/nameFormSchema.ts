import { type Input, maxLength, minLength, object, string } from "valibot"

const studentSchemaLabels = {
  studentName: "Nom de l'étudiant",
}

const StudentNameSchema = object({
  studentName: string([
    maxLength(40, "Le nom ne peut pas faire plus de 40 caractères."),
    minLength(1, "Le nom doit contenir au minimum un caractère."),
  ]),
} satisfies Record<keyof typeof studentSchemaLabels, any>)

type StudentGradeForm = Input<typeof StudentNameSchema>

export { studentSchemaLabels, StudentNameSchema, type StudentGradeForm }
