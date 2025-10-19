import { BoxIcon, SignalHighIcon, SpeakerIcon, ToiletIcon } from "lucide-react";

export function Devices() {
  return (
    <div className={"flex flex-col py-2 gap-2"}>
      <div className="flex flex-row gap-3">
        <SpeakerIcon className="text-gray-400" />
        <p className="grow text-left">Speaker</p>
        <SignalHighIcon className="self-end text-gray-600" />
      </div>
      <div className="flex flex-row gap-3">
        <BoxIcon className="text-gray-400" />
        <p className="grow text-left">Fridge</p>
        <SignalHighIcon className="self-end text-gray-600" />
      </div>
      <div className="flex flex-row gap-3">
        <ToiletIcon className="text-gray-400" />
        <p className="grow text-left">Toilet</p>
        <SignalHighIcon className="self-end text-gray-600" />
      </div>
    </div>
  );
}
