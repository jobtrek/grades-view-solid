import { createMemo } from "solid-js"
import { roundTo } from "~/utils/roundTo"
import { weightedAverage } from "~/utils/average"
import { useGradesContext } from "~/contexts/gradesContext/GradesContext"
import {
  mathEngAverageMemo,
  sociAverageMemo,
} from "~/contexts/gradesContext/memos/generalKnowledgeMemo"
import { infoAverageMemo } from "~/contexts/gradesContext/memos/technicalDomainMemos"

const [gradesContext] = useGradesContext()
export const generalAverageMemo = createMemo(() => {
  const forAverageCalc = [
    [gradesContext.tpi, 30],
    [sociAverageMemo(), 20],
    [mathEngAverageMemo(), 20],
    [infoAverageMemo(), 30],
  ].filter(([grade]) => grade !== null) as Array<[number, number]>
  return forAverageCalc.length > 0
    ? roundTo(weightedAverage(forAverageCalc))
    : null
})
