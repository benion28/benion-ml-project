import React from 'react'
import ChatBotPopUpIcon from './ChatBotPopUpIcon'
import ChatBotPopUpMessage from './ChatBotPopUpMessage'

const ChatBotPopUpBody = ({ chatBodyRef, chatHistory }) => {
  return (
    <div ref={chatBodyRef} className="chat-body">
        <div className="message bot-message">
        <ChatBotPopUpIcon />
        <p className="message-text">
            Hey there <br /> How can I help you today?
        </p>
        </div>

        {/* Render the chat history dynamically */}
        {chatHistory.map((chat, index) => (
        <ChatBotPopUpMessage key={index} chat={chat} />
        ))}
    </div>
  )
}

export default ChatBotPopUpBody