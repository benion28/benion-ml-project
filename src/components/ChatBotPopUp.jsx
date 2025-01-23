import React, { useRef, useState } from 'react';
import '../styles/chatbot-popup.scss'
import ChatBotPopUpHeader from './header/ChatBotPopUpHeader';
import ChatBotPopUpBody from './ChatBotPopUpBody';
import ChatBotPopUpFooter from './footer/ChatBotPopUpFooter';
import { useSelector } from 'react-redux';
import { chatGreeting } from '../services/helpers';

const ChatBotPopUp = () => {
  const [showChatbot, setShowChatbot] = useState(false)
  const chatBodyRef = useRef()
  const theme = useSelector((state) => state.ui.theme)
  const { chat } = useSelector((state) => state.chat)

  return (
    <div className={`chatbot-popup ${theme}`}>
      <div className={`container ${showChatbot ? "show-chatbot" : ""}`}>
        <button onClick={() => setShowChatbot(prev => !prev)} id="chatbot-toggler">
          <span className="material-symbols-rounded">mode_comment</span>
          <span className="material-symbols-rounded">close</span>
        </button>

        <div className="chatbot-popup">
          <ChatBotPopUpHeader 
            setShowChatbot={setShowChatbot} 
          />

          <ChatBotPopUpBody
            chatBodyRef={chatBodyRef}
            chatHistory={ chat?.history ? chat?.history : chatGreeting }
          />

          <ChatBotPopUpFooter />

        </div>
      </div>
    </div>
  )
}

export default ChatBotPopUp
