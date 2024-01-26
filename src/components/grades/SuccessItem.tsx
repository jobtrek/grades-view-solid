import { type Component, mergeProps } from "solid-js"

interface Props {
  success: boolean
  large?: boolean
}

export const SuccessItem: Component<Props> = (baseProps) => {
  const props = mergeProps({ large: false }, baseProps)

  return (
    <div
      class="flex flex-wrap items-baseline justify-between gap-y-2 bg-white px-6 py-4"
      classList={{
        "col-span-2 gap-x-2": props.large,
        "gap-x-4": !props.large,
      }}
    >
      <dd
        class="w-full flex-none text-2xl font-bold tracking-tight text-gray-900"
        classList={{
          "text-emerald-600": props.success,
          "text-red-800": !props.success,
        }}
      >
        {props.success ? "Réussi" : "Échoué"}
      </dd>
    </div>
  )
}

export default SuccessItem
