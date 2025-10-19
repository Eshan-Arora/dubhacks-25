import { useState } from "react";

import { ChatBox } from "./components/ChatBox";
import { InfoSquareRoot, InfoSquareHeading, InfoSquareContent } from "./components/InfoSquare";
import { Lights } from "./components/Lights";

import "./App.css";
import { LightbulbIcon } from "lucide-react";
import { Sprinklers } from "./components/Sprinklers";

function App() {
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
    <>
      <div id="root" className="flex flex-col justify-center items-center bg-gray-100">
        <div className="w-5/6 md:w-6/10 md:min-w-xl p-5">
          <div className="flex flex-row items-center">
            <div className="flex flex-col items-start w-2xs gap-1">
              <h2 className="leading-none text-2xl font-semibold">Hello, Joe!</h2>
              <h3>some subtitle...</h3>
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
            <InfoSquareRoot>
              <InfoSquareHeading title="Lights" icon={<LightbulbIcon className="text-gray-400" />} />
              <InfoSquareContent>
                <Lights />
              </InfoSquareContent>
            </InfoSquareRoot>

            <InfoSquareRoot>
              <InfoSquareHeading title="Lights" icon={<LightbulbIcon className="text-gray-400" />} />
              <InfoSquareContent>
                <Sprinklers />
              </InfoSquareContent>
            </InfoSquareRoot>
          </div>
        </div>
      </div>
      <div>
        <pre>{loading ? "Loading..." : responseText}</pre>
      </div>
    </>
  );
}

export default App;
