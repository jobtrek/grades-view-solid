import { type Component, createEffect, createMemo, createSignal, Index, Show } from 'solid-js'
import { GradeElement } from '~/components/GradeElement'
import { Semester } from '~/components/Semester'
import { AddSemesterButton } from '~/components/AddSemesterButton'
import { createStore, type Part } from 'solid-js/store'
import { roundTo } from '~/utils/roundTo'
import { average } from '~/utils/average'
import { addGlobalGrade, type Grades } from '~/globalGradesStore'
import { type GeneralKnowledge } from '~/store/GradeStoreModels'
import {
  addGeneralKnowledgeSemester,
  createStudentGeneralBranchAverageMemo,
  gradesStore
} from '~/store/gradeStore'

interface Props {
  name: keyof GeneralKnowledge
  title: string
}

export const GradesSection: Component<Props> = (props) => {
  return (
    <div class="grid grid-cols-1 gap-4 lg:col-span-2">
      <section aria-labelledby="section-1-title">
        <h2 class="sr-only" id="section-1-title">
          {props.title}
        </h2>
        <div class="overflow-hidden rounded-lg bg-white shadow">
          <div class="p-6">
            <div class="md:flex md:items-center md:justify-between">
              <div class="min-w-0 flex-1">
                <h2
                  class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                  {props.title}
                </h2>
              </div>
              <div class="mt-4 flex md:ml-4 md:mt-0">
                <Show when={createStudentGeneralBranchAverageMemo(props.name)()}>
                  {grade => <GradeElement grade={grade()} class="font-bold text-lg px-3 py-1"/>}
                </Show>
              </div>
            </div>
            <div class="mt-6 border-t border-gray-100">
              <dl class="divide-y divide-gray-100">
                <Index each={gradesStore.generalKnowledge[props.name].semesters}>
                  {
                    (semester, index) =>
                      <Semester branchName={props.name} semesterIndex={index}/>
                  }
                </Index>
                <AddSemesterButton addSemester={() => { addGeneralKnowledgeSemester(props.name) }}/>
              </dl>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
