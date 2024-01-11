import { type Input, maxValue, minValue, number, object } from 'valibot'

const AddGradeSchema = object({
  grade: number([
    maxValue(6, 'La note ne peut pas être supérieure à 6'),
    minValue(1, 'La note ne peut pas être inférieure à 1')
  ])
})

type AddGradeForm = Input<typeof AddGradeSchema>

export {
  AddGradeSchema,
  type AddGradeForm
}