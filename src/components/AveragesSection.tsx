import { type Component } from 'solid-js'
import { AverageItem } from '~/components/AverageItem'
import { TpiGradeItem } from '~/components/TpiGradeItem'
import {
  cieAverageMemo,
  engAverageMemo, epsicAverageMemo,
  generalAverageMemo, infoAverageMemo,
  mathAverageMemo,
  mathEngAverageMemo, sociAverageMemo
} from '~/store/gradeStore'

export const AveragesSection: Component = () => {
  return (
    <div class="grid grid-cols-1 gap-4">
      <section aria-labelledby="section-2-title">
        <h2 class="sr-only" id="section-2-title">
          Averages
        </h2>
        <div class="overflow-hidden rounded-lg bg-white shadow">
          <dl class="mx-auto grid grid-cols-1 gap-px bg-gray-900/5 sm:grid-cols-2 lg:grid-cols-2">
            <AverageItem title="Moyenne générale" grade={generalAverageMemo()} large={true} />
            <TpiGradeItem />
            <AverageItem title="Compétences générales" grade={mathEngAverageMemo()} />
            <AverageItem grade={mathAverageMemo()} title="Mathématiques" />
            <AverageItem grade={engAverageMemo()} title="Anglais" />
            <AverageItem grade={sociAverageMemo()} title="Société et langues" />
            <AverageItem grade={infoAverageMemo()} title="Informatique" />
            <AverageItem grade={epsicAverageMemo()} title="EPSIC" />
            <AverageItem grade={cieAverageMemo()} title="CIE" />
          </dl>
        </div>
      </section>
    </div>
  )
}
