import { useId } from "react";
import { Switch } from "./base/Switch";
import clsx from "clsx";

export type SwitchItemProps = {
  name: string;
  icon: React.ReactNode;
};

export function SwitchItem({ name, icon }: SwitchItemProps) {
  const id = useId();
  return (
    <div className="flex flex-row gap-3">
      {icon}
      <label htmlFor={id} className="grow text-left">{name}</label>
      <Switch id={id} />
    </div>
  );
}

export type SwitchListProps = {
  className?: string;
  children: React.ReactNode;
};

export function SwitchList({ className, children }: SwitchListProps) {
  return (
    <div className={clsx("flex flex-col py-2 gap-2", className)}>
      {children}
    </div>
  );
}
