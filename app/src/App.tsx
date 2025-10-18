import { useState } from 'react'

import { ChatBox } from './components/ChatBox';

import './App.css'

function App() {
  const [chatText, setChatText] = useState("");

  return (
    <>
      <div id="root">
        <ChatBox
          text={chatText}
          onChange={setChatText}
          placeholder="What do you want to do?"
        />
      </div>
    </>
  )
}

export default App
