import { useState } from 'react';
import './App.css';
import TextInput from './TextInput';
import Message from './Message';

function App() {
  const [messages, setMessages] = useState([])
  return <div className="App">
      
      <header className="App-header">
        <div className="logo" />
         WALKIE 
      </header>
      
      <main className="messages">
      {messages.map((m,i)=> {
        return <Message key={i} {...m} />
      })}
      </main>

      <TextInput
        send={(t)=> setMessages( [{text:t}, ...messages] )}
      />

  </div>
}

export default App;
