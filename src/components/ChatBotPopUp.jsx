import React, { useRef, useState } from 'react';
import '../styles/chatbot-popup.scss'
import ChatBotPopUpHeader from './header/ChatBotPopUpHeader';
import ChatBotPopUpBody from './ChatBotPopUpBody';
import ChatBotPopUpFooter from './footer/ChatBotPopUpFooter';
import { useSelector } from 'react-redux';

const ChatBotPopUp = () => {
  const [showChatbot, setShowChatbot] = useState(false)
  const [chatHistory, setChatHistory] = useState([{
    role: "user", 
    text: "Hello! How can I assist you today?" 
  }]) 
  const chatBodyRef = useRef()
  const theme = useSelector((state) => state.ui.theme)

  const generateBotResponse = (message) => {}

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
            chatHistory={chatHistory}
          />

          <ChatBotPopUpFooter
            setChatHistory={setChatHistory} 
            generateBotResponse={generateBotResponse}
            chatHistory={chatHistory}
          />

        </div>
      </div>
    </div>
  )
}

export default ChatBotPopUp
