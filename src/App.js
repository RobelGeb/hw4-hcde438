import { useState } from 'react';
import './App.css';
import TextInput from './TextInput';
import Message from './Message';
import NamePicker from './NamePicker';
import {db, useDB} from './db'

function App() {
  const [messages, setMessages] = useState([])  
  const [username, setUsername] = useState(
    localStorage.getItem('username') || ''
  )

  return <div className="App">
    <header className="App-header">
      <div className="logo" />
        WALKIE
        <NamePicker saveName={setUsername} /> 
    </header>
    
    <main className="messages">
      {messages.map((m,i)=> {
        const isMe = m.name===username
        return <Message key={i} {...m} isMe={isMe} />
      })}
    </main>

    <TextInput
      send={(t)=> setMessages([{text:t, name:username, date:new Date()}, ...messages])}
    />

  </div>
}

export default App;
//FOR FIREBASE DATABASE SUPPORT
//LINE 9 const messages = useDB()
//LINE 28 send={(t)=> db.send({text:t, name:username, date:new Date()})}
//LOCAL
//const [messages, setMessages] = useState([])
//send={(t)=> setMessages([{text:t, name:username, date:new Date()}, ...messages])}
