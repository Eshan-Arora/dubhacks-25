import { useState } from "react";

import { ChatBox } from "./components/ChatBox";
import { InfoSquareRoot, InfoSquareHeading, InfoSquareContent } from "./components/InfoSquare";
import { Lights } from "./components/Lights";
import { Weather } from "./components/Weather";
import { Devices } from "./components/Devices";

import './App.css'
import { LightbulbIcon, CloudSunIcon, DropletIcon, ComputerIcon } from 'lucide-react';
import { Sprinklers } from './components/Sprinklers';
import { SleepScheduleInfoSquare } from './components/SleepSchedule';
import { Intro, type SetupInfo } from './components/intro/Intro';

function Main({ info }: { info: SetupInfo }) {
  const [chatText, setChatText] = useState("");
  const [loading, setLoading] = useState(false);
  const [responseText, setResponseText] = useState("");

  async function queryAPI() {
    try {
      setLoading(true);
      console.log("Querying API with text:", chatText);

      const res = await fetch("http://localhost:3001/input", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input: chatText }),
      });

      if (!res.ok) throw new Error(`Server error: ${res.status}`);

      // if backend returned JSON { response: ... }
      const data = await res.json();
      console.log("Server returned:", data);

      setResponseText(data.response || JSON.stringify(data));
    } catch (err) {
      console.error("Error calling API:", err);
      setResponseText("Error connecting to backend");
    } finally {
      setLoading(false);
    }
  }


  return (
    <div className="w-5/6 md:w-6/10 md:min-w-xl p-5 popin">
      <div className="flex flex-row items-center">
        <div className="flex flex-col items-start w-2xs gap-1">
          <h2 className="leading-none text-2xl font-semibold">
            Hello, {info.name}!
          </h2>
          <h3>
            Welcome to your HomeHive
          </h3>
        </div>
        <ChatBox
          text={chatText}
          onChange={setChatText}
          placeholder="What do you want to do?"
          className="grow"
          onSubmit={queryAPI}
        />
      </div>

      <div className="grid grid-cols-2 gap-4 my-4">
        {/* Col 1 */}
        <div className="flex flex-col gap-4">
          <InfoSquareRoot className="relative overflow-hidden bg-linear-to-b! from-blue-200 to-blue-300  anim-delay1">
            <InfoSquareHeading
              title="Weather"
              icon={<CloudSunIcon className="text-white drop-shadow-md drop-shadow-gray-400" />}
              className="text-white text-shadow-md"
            />
            <InfoSquareContent className="overflow-hidden">
              <Weather />
            </InfoSquareContent>
          </InfoSquareRoot>

          <InfoSquareRoot className=" anim-delay3">
            <InfoSquareHeading
              title="Sprinklers"
              icon={<DropletIcon className="text-gray-400" />}
            />
            <InfoSquareContent>
              <Sprinklers />
            </InfoSquareContent>
          </InfoSquareRoot>

          <InfoSquareRoot className=" anim-delay2">
            <InfoSquareHeading
              title="Devices"
              icon={<ComputerIcon className="text-gray-400" />}
            />
            <InfoSquareContent>
              <Devices />
            </InfoSquareContent>
          </InfoSquareRoot>
        </div>

        {/* Col 2 */}
        <div className="flex flex-col gap-4">
          <InfoSquareRoot className=" anim-delay2">
            <InfoSquareHeading
              title="Lights"
              icon={<LightbulbIcon className="text-gray-400" />}
            />
            <InfoSquareContent>
              <Lights />
            </InfoSquareContent>
          </InfoSquareRoot>

          <SleepScheduleInfoSquare />
        </div>
        <div>
          <pre className="whitespace-pre-wrap break-words max-w-xl max-h-64 overflow-auto text-sm text-gray-800 bg-white p-3 rounded border border-gray-200">
            {loading ? "Loading..." : responseText}
          </pre>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [info, setInfo] = useState<SetupInfo | null>(null);

  return (
    <>
      <div
        id="root"
        className="flex flex-col justify-center items-center bg-gray-100"
      >
        {info ? <Main info={info} /> : <Intro onSetup={setInfo} />}
      </div>
    </>
  );
}

export default App;
