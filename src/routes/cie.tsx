import { type Component } from 'solid-js'
import { ModulesGradesSection } from '~/components/ModulesGradesSection'
import { cieModules } from '~/data/cieModules'

export default function Cie() {
  return (
    <ModulesGradesSection name="cie" title="Modules CIE" modules={cieModules}/>
  )
}
