import { ModulesGradesSection } from '~/components/ModulesGradesSection'
import { epsicModules } from '~/data/epsicModules'

export default function Epsic () {
  return (
    <ModulesGradesSection name="epsic" title="Modules EPSIC" modules={epsicModules}/>
  )
}
