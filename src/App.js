import './App.css';
import DashgramGroups from './DashgramGroups';
import ChatsHeader from './ChatsHeader';
import TextChat from './TextChat';
import PostChat from './PostChat';
import MessageBar from './MessageBar';
import DashgramInfo from './DashgramInfo';
import CallScreen from './CallScreen';
import InCallChat from './InCallChat';
import { Switch, Route } from "react-router-dom"
import { useState } from 'react';
import Messenger from './Messenger';

function App() {

  const [chatBoxOpen, setChatBoxOpen] = useState(false);

  return (
    <div class="main-wrap">
      <DashgramGroups/>

      <>  
        <Route exact={true} path='/' render={() => {
          return(
            <>
              <section class="dashgram-chats">
                <ChatsHeader/>
                <div class="d-flex">
                  <TextChat setChatBoxOpen={setChatBoxOpen}/>
                  <PostChat/>
                </div>

                <MessageBar/>
              </section>

              <DashgramInfo chatBoxOpen={chatBoxOpen} setChatBoxOpen={setChatBoxOpen} />
            </>
          )
        }} />
        <Route exact={true} path='/messenger' render={() => {
          return (
            <>
              <Messenger></Messenger>
              <DashgramInfo chatBoxOpen={chatBoxOpen} setChatBoxOpen={setChatBoxOpen} />
            </>
          )
        }} />
        <Route exact={true} path="/in-call" render={() => {
          return (
            <>
              <CallScreen></CallScreen>
              <InCallChat></InCallChat>
            </>
          )
        }} />
      </>
    </div>
  );
}

export default App;
