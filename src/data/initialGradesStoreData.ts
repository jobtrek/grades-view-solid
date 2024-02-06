import { type StudentGrades } from "~/types/models/GradeStoreModels"

export const initialGradesStoreData = {
  version: "1.6.3", // x-release-please-version
  name: "",
  tpi: null,
  info: {
    epsic: [],
    cie: [],
  },
  generalKnowledge: {
    math: {
      maxSemesters: 3,
      semesters: [],
    },
    eng: {
      maxSemesters: 5,
      semesters: [],
    },
    overallCulture: {
      maxSemesters: 8,
      semesters: [],
    },
  },
} satisfies StudentGrades
