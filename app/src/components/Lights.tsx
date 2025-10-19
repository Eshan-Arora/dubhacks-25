import { ToiletIcon, ArmchairIcon, BedIcon } from "lucide-react";
import { SwitchList, SwitchItem } from "./SwitchList";

export type LightsProps = {

};

export function Lights() {
  return (
    <SwitchList>
      <SwitchItem name="Bedroom 1" icon={<BedIcon className="text-gray-400" />} />
      <SwitchItem name="Bedroom 2" icon={<BedIcon className="text-gray-400" />} />
      <SwitchItem name="Living room" icon={<ArmchairIcon className="text-gray-400" />} />
      <SwitchItem name="Bathroom" icon={<ToiletIcon className="text-gray-400" />} />
    </SwitchList>
  );
}
