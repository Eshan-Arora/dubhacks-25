import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"

import { clsx } from "clsx"

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={clsx(
        "relative h-[20px] w-[36px] cursor-default rounded-full bg-gray-300 outline-none data-[state=checked]:bg-green-400",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={clsx(
          "block size-[14px] translate-x-[4px] rounded-full bg-white transition-transform duration-100 will-change-transform data-[state=checked]:translate-x-[18px]"
        )}
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
