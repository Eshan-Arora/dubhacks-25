import { useState } from 'react'

import { ChatBox } from './components/ChatBox';
import { InfoSquare } from './components/InfoSquare';
import { Lights } from "./components/Lights";

import './App.css'
import { LightbulbIcon } from 'lucide-react';
import { Sprinklers } from './components/Sprinklers';

function App() {
  const [chatText, setChatText] = useState("");

  return (
    <>
      <div
        id="root"
        className="flex flex-col justify-center items-center bg-gray-100"
      >
        <div className="w-5/6 md:w-6/10 md:min-w-xl p-5">
          <div className="flex flex-row items-center">
            <div className="flex flex-col items-start w-2xs gap-1">
              <h2 className="leading-none text-2xl font-semibold">
                Hello, Joe!
              </h2>
              <h3>
                some subtitle...
              </h3>
            </div>
            <ChatBox
              text={chatText}
              onChange={setChatText}
              placeholder="What do you want to do?"
              className="grow"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 my-4">
            <InfoSquare
              title="Lights"
              icon={<LightbulbIcon className="text-gray-400" />}
            >
              <Lights />
            </InfoSquare>

            <InfoSquare
              title="Sprinklers"
              icon={<LightbulbIcon className="text-gray-400" />}
            >
              <Sprinklers />
            </InfoSquare>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
