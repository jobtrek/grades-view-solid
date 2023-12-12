import { type Component } from 'solid-js'
import { ModulesGradesSection } from '~/components/ModulesGradesSection'
import { cieModules } from '~/data/cieModules'

export const Cie: Component = () => {
  return (
    <ModulesGradesSection name="cie" title="Modules CIE" modules={cieModules}/>
  )
}

export default Cie
