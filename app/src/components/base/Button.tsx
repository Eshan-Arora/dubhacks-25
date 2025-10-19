import clsx from "clsx";
import type { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button"> & {
  className?: string;
};

export function Button({ className, ...rest }: ButtonProps) {
  return (
    <button
      className={clsx(className, "flex items-center gap-2 rounded-full px-4 py-2 text-black bg-yellow-300 mt-6 self-center active:scale-95 duration-50")}
      {...rest}
    />
  );
}
