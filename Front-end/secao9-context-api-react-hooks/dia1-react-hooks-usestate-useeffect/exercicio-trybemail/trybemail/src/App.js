// import './App.css';
import { useState, useEffect } from 'react';
import messagesList from './data/messageslist';
import { READ, UNREAD } from './constants';
import Controls from './component/Controls';
import List from './component/List';

function App() {
    const [messages, setMessages] = useState(messagesList);

  useEffect(() => {
    const isAllMessagesRead = messages.every(({ status }) => status === READ);
    if (isAllMessagesRead) {
      alert('Parabéns! Você leu todas as suas mensagens.');
    }
  }, [messages]);

    const setMessageStatus = (messageId, newStatus) => {
      const updatedMessages = messages.map((currentMessage) => {
        if (currentMessage.id === messageId) {
          return { ...currentMessage, status: newStatus };
        }
        return currentMessage;
      });

      setMessages(updatedMessages);
    };

    const markAllAsRead = () => {
      const allAsRead = messages.map((m) => ({ ...m, status: READ }));
      setMessages(allAsRead);
    };

    const markAllAsUnread = () => {
      const allAsUnread = messages.map((m) => ({ ...m, status: UNREAD}));
      setMessages(allAsUnread);
    };

  return (
    <div className="App">
      <header>
        <h1>Trybemail</h1>
      </header>
      <Controls
        markAllAsRead={ markAllAsRead }
        markAllAsUnread={ markAllAsUnread }
      />

      <List 
      messages={ messages } 
      setMessageStatus={ setMessageStatus }
      />
    </div>
  );
}

export default App;
