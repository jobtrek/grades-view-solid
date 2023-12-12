import { type Component } from 'solid-js'
import { ModulesGradesSection } from '~/components/ModulesGradesSection'
import { epsicModules } from '~/data/epsicModules'

export const Epsic: Component = () => {
  return (
    <ModulesGradesSection name="epsic" title="Modules EPSIC" modules={epsicModules}/>
  )
}

export default Epsic
