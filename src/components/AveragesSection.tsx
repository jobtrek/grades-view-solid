import { type VoidComponent } from "solid-js"
import { AverageItem } from "~/components/grades/AverageItem"
import { TpiGradeItemForm } from "~/components/forms/TpiGradeItemForm"
import { generalAverageMemo } from "~/contexts/gradesContext/memos/generalAverageMemo"
import {
  engAverageMemo,
  mathAverageMemo,
  mathEngAverageMemo,
  sociAverageMemo,
} from "~/contexts/gradesContext/memos/generalKnowledgeMemo"
import {
  cieAverageMemo,
  epsicAverageMemo,
  infoAverageMemo,
} from "~/contexts/gradesContext/memos/technicalDomainMemos"
import { SuccessItem } from "~/components/grades/SuccessItem"
import { isApprenticeshipSuccessfulMemo } from "~/contexts/gradesContext/memos/isApprenticeshipSuccessfulMemo"

export const AveragesSection: VoidComponent = () => {
  return (
    <div class="grid grid-cols-1 gap-4">
      <section aria-labelledby="section-2-title">
        <h2 class="sr-only" id="section-2-title">
          Averages
        </h2>
        <div class="overflow-hidden rounded-lg bg-white shadow">
          <dl class="mx-auto grid grid-cols-1 gap-px bg-gray-900/5 sm:grid-cols-2 lg:grid-cols-2">
            <SuccessItem
              large={true}
              success={isApprenticeshipSuccessfulMemo()}
            />
            <AverageItem
              title="Moyenne générale"
              grade={generalAverageMemo()}
              large={true}
            />
            <TpiGradeItemForm />
            <AverageItem grade={sociAverageMemo()} title="Société et langues" />
            <AverageItem
              title="Compétences générales"
              grade={mathEngAverageMemo()}
              large={true}
            />
            <AverageItem grade={mathAverageMemo()} title="Mathématiques" />
            <AverageItem grade={engAverageMemo()} title="Anglais" />
            <AverageItem
              grade={infoAverageMemo()}
              title="Informatique"
              large={true}
            />
            <AverageItem grade={epsicAverageMemo()} title="EPSIC" />
            <AverageItem grade={cieAverageMemo()} title="CIE" />
          </dl>
        </div>
      </section>
    </div>
  )
}

export default AveragesSection
