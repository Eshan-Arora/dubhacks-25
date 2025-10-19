import { useEffect, useRef, useState } from "react";
import { ArrowRightIcon } from "lucide-react";
import { Button } from "../base/Button";
import { MoonLoader } from "react-spinners";

function Stage0({
  onStart,
}: {
  onStart: () => void
}) {
  return (
    <div className="flex flex-col item-center bg-white rounded-2xl p-8 animate-(--intro-reveal)">
      <h1 className="text-3xl">Welcome to HomeHive!</h1>
      <Button onClick={onStart}>
        Get Started
        <ArrowRightIcon width="1.25em" height="1.25em" />
      </Button>
    </div>
  );
}

function Stage1({
  onNameChoose,
}: {
  onNameChoose: (name: string) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [name, setName] = useState("");

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="flex flex-col gap-4 item-center bg-white rounded-2xl w-sm p-8">
      <h2 className="text-2xl text-left">What's your name?</h2>
      <div className="flex flex-row gap-2">
        <input
          className="rounded-full bg-gray-100 py-2 px-3 grow focus:outline focus:outline-blue-300"
          placeholder="Your name"
          ref={inputRef}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button className="m-0!" onClick={() => name ? onNameChoose(name) : onNameChoose("unknown")}>Confirm</Button>
      </div>
    </div>
  );
}

function Stage2() {
  return (
    <div className="flex flex-col gap-4 item-center bg-white rounded-2xl w-sm p-8">
      <div className="flex flex-col gap-8 items-center">
        <div className="flex items-center justify-center">
          <MoonLoader />
        </div>
        <p className="text-center">Getting everything ready</p>
      </div>
    </div>
  );
}

export type SetupInfo = {
  name: string;
};

export function Intro({
  onSetup,
}: {
  onSetup: (info: SetupInfo) => void;
}) {
  const [stage, setStage] = useState(0);
  const info: SetupInfo = {
    name: "unknown",
  };

  if (stage === 0) {
    return <Stage0 onStart={() => setStage(1)} />
  } else if (stage === 1) {
    return <Stage1
      onNameChoose={(name) => {
        info.name = name.trim();
        info.name = name.substring(0, 1).toUpperCase() + name.substring(1);
        setStage(2);

        setTimeout(() => {
          onSetup(info);
        }, 3_000);
      }}
    />
  } else if (stage === 2) {
    return <Stage2 />
  }
};
