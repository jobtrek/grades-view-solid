import { createMemo } from "solid-js"
import { roundTo } from "~/utils/roundTo"
import { weightedAverageFlat } from "~/utils/average"
import { useGradesContext } from "~/contexts/gradesContext/GradesContext"
import { createTechnicalDomainAverageMemo } from "~/contexts/gradesContext/memoUtils/createTechnicalDomainAverageMemo"

const [gradesContext] = useGradesContext()

export const epsicAverageMemo = createTechnicalDomainAverageMemo(
  gradesContext,
  "epsic",
)
export const cieAverageMemo = createTechnicalDomainAverageMemo(
  gradesContext,
  "cie",
)
export const infoAverageMemo = createMemo(() => {
  let info = null
  if (epsicAverageMemo() !== null && cieAverageMemo() !== null) {
    info = roundTo(
      weightedAverageFlat([epsicAverageMemo(), cieAverageMemo()], [80, 20]),
    )
  } else if (epsicAverageMemo() !== null) {
    info = epsicAverageMemo()
  } else if (cieAverageMemo() !== null) {
    info = cieAverageMemo()
  }
  return info
})
