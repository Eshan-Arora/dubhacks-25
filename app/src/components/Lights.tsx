import { ToiletIcon, ArmchairIcon, BedIcon } from "lucide-react";
import { Switch } from "./base/Switch";
import { useId } from "react";

type LightProps = {
  name: string;
  icon: React.ReactNode;
};

function Light({ name, icon }: LightProps) {
  const id = useId();
  return (
    <div className="flex flex-row gap-3">
      {icon}
      <label htmlFor={id} className="grow text-left">{name}</label>
      <Switch id={id} />
    </div>
  );
}

export type LightsProps = {

};

export function Lights() {
  return (
    <div className="flex flex-col py-2 gap-2">
      <Light name="Bedroom 1" icon={<BedIcon className="text-gray-400" />} />
      <Light name="Bedroom 2" icon={<BedIcon className="text-gray-400" />} />
      <Light name="Living room" icon={<ArmchairIcon className="text-gray-400" />} />
      <Light name="Deck" icon={<ToiletIcon className="text-gray-400" />} />
    </div>
  );
}
