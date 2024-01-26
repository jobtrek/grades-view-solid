import { createMemo } from "solid-js"
import { infoAverageMemo } from "~/contexts/gradesContext/memos/technicalDomainMemos"
import { useGradesContext } from "~/contexts/gradesContext/GradesContext"
import { generalAverageMemo } from "~/contexts/gradesContext/memos/generalAverageMemo"

const [gradesStore] = useGradesContext()

export const isApprenticeshipSuccessfulMemo = createMemo<boolean>(() => {
  return (
    generalAverageMemo() >= 4 && infoAverageMemo() >= 4 && gradesStore.tpi >= 4
  )
})
