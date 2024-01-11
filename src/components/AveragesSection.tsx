import { type Component } from 'solid-js'
import { AverageItem } from '~/components/AverageItem'
import { allGradesMemo } from '~/store/gradeStore'

export const AveragesSection: Component = () => {
  return (
    <div class="grid grid-cols-1 gap-4">
      <section aria-labelledby="section-2-title">
        <h2 class="sr-only" id="section-2-title">
          Averages
        </h2>
        <div class="overflow-hidden rounded-lg bg-white shadow">
          <dl class="mx-auto grid grid-cols-1 gap-px bg-gray-900/5 sm:grid-cols-2 lg:grid-cols-2">
            <AverageItem title="Moyenne générale" grade={allGradesMemo().global} large={true} />
            <AverageItem title="TPI" grade={allGradesMemo().tpi} />
            <AverageItem title="Compétences générales" grade={allGradesMemo().mathEng} />
            <AverageItem grade={allGradesMemo().maths} title="Mathématiques" />
            <AverageItem grade={allGradesMemo().eng} title="Anglais" />
            <AverageItem grade={allGradesMemo().soci} title="Société et langues" />
            <AverageItem grade={allGradesMemo().info} title="Informatique" />
            <AverageItem grade={allGradesMemo().epsic} title="EPSIC" />
            <AverageItem grade={allGradesMemo().cie} title="CIE" />
          </dl>
        </div>
      </section>
    </div>
  )
}
