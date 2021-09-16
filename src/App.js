import './App.css';
import DashgramGroups from './DashgramGroups';
import ChatsHeader from './ChatsHeader';
import TextChat from './TextChat';
import PostChat from './PostChat';
import MessageBar from './MessageBar';
import DashgramInfo from './DashgramInfo';
import { useState } from 'react';

function App() {

  const [chatBoxOpen, setChatBoxOpen] = useState(false);

  return (
    <div class="main-wrap">
      <DashgramGroups/>

      <section class="dashgram-chats">
        <ChatsHeader/>
        <div class="d-flex">
          <TextChat setChatBoxOpen={setChatBoxOpen}/>
          <PostChat/>
        </div>

        <MessageBar/>
      </section>

      <DashgramInfo chatBoxOpen={chatBoxOpen} setChatBoxOpen={setChatBoxOpen} />
    </div>
  );
}

export default App;
