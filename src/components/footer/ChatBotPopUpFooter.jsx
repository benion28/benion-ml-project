import React from 'react'
import ChatBotPopUpForm from '../forms/ChatBotPopUpForm'

const ChatBotPopUpFooter = ({ setChatHistory, generateBotResponse, chatHistory }) => {
  return (
    <div className="chat-footer">
        <ChatBotPopUpForm 
            setChatHistory={setChatHistory} 
            generateBotResponse={generateBotResponse}
            chatHistory={chatHistory} 
        />
    </div>
  )
}

export default ChatBotPopUpFooter