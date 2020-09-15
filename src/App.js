import React, {useState,useEffect} from 'react';
import './App.css';
import './Sidebar';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Pusher from 'pusher-js';
import axios from './axios';

function App() {
  const [messages,setMessages] = useState([]);

  useEffect(() => {
      const response = axios.get("/messages/sync")
      response.then((res) => {
          setMessages(res.data);
        }).catch(err => err);
  },[]);

  useEffect(() => {
    const pusher = new Pusher('3786ff493c4d1eeb09d6', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      setMessages([...messages,newMessage])
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
    
  }, [messages]);


  return (
    <div className="app">
      <div className="app__body">
        {/*side bar*/}
        <Sidebar/>
        {/*chat component*/}
        <Chat messages={messages}/>
      </div>
    </div>
  );
}

export default App;
