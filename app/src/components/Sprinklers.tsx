import { FlowerIcon, Flower2Icon } from "lucide-react";
import { SwitchList, SwitchItem } from "./SwitchList";

export type SprinklerProps = {

};

export function Sprinklers() {
  return (
    <div className="flex flex-col grow pb-2">
      <SwitchList className="grow">
        <SwitchItem name="Sunflowers" icon={<FlowerIcon className="text-gray-400" />} />
        <SwitchItem name="Petunias" icon={<Flower2Icon className="text-gray-400" />} />
      </SwitchList>
      <p className="text-gray-500 text-left">
        Sunflowers scheduled in 4 hours
      </p>
    </div>
  );
}
