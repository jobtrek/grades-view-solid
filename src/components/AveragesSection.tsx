import { type Component } from 'solid-js'
import { allGrades } from '~/globalGradesStore'
import { AverageItem } from '~/components/AverageItem'

export const AveragesSection: Component = () => {
  return (
    <div class="grid grid-cols-1 gap-4">
      <section aria-labelledby="section-2-title">
        <h2 class="sr-only" id="section-2-title">
          Averages
        </h2>
        <div class="overflow-hidden rounded-lg bg-white shadow">
          <dl class="mx-auto grid grid-cols-1 gap-px bg-gray-900/5 sm:grid-cols-2 lg:grid-cols-2">
            <AverageItem title="Moyenne générale" grade={allGrades().global} />
            <AverageItem title="TPI" grade={allGrades().tpi} />
            <AverageItem title="Compétences générales" grade={allGrades().mathEng}/>
            <AverageItem grade={allGrades().maths} title="Mathématiques" />
            <AverageItem grade={allGrades().eng} title="Anglais" />
            <AverageItem grade={allGrades().info} title="Informatique" />
            <AverageItem grade={allGrades().epsic} title="EPSIC" />
            <AverageItem grade={allGrades().cie} title="CIE" />
          </dl>
        </div>
      </section>
    </div>
  )
}
