import { type Component, Match, Switch } from 'solid-js'

export const AveragePercentDiff: Component<{ percentDiff: number }> = props => {
  return (
    <Switch>
      <Match when={props.percentDiff > 0 }>
        <dd class="text-xs font-medium text-green-600">+{props.percentDiff}%</dd>
      </Match>
      <Match when={props.percentDiff < 0}>
        <dd class="text-xs font-medium text-red-700">{props.percentDiff}%</dd>
      </Match>
    </Switch>
  )
}
