import { createMemo } from "solid-js"
import { roundTo } from "~/utils/roundTo"
import { weightedAverageFlat } from "~/utils/average"
import { createTechnicalDomainAverageMemo } from "~/contexts/gradesContext/memoUtils/createTechnicalDomainAverageMemo"

export const epsicAverageMemo = createTechnicalDomainAverageMemo("epsic")
export const cieAverageMemo = createTechnicalDomainAverageMemo("cie")
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
