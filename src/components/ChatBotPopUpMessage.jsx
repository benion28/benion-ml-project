import React from 'react'
import ChatBotPopUpIcon from './ChatBotPopUpIcon'

const ChatBotPopUpMessage = ({ chat }) => {
  return (
    <div className={`message ${chat.role === "model" ? "bot" : "user"}-message ${chat.isError ? "error" : ""}`}>
        {chat.role === "model" && <ChatBotPopUpIcon />}
        <p className="message-text">{chat.text}</p>
    </div>
  )
}

export default ChatBotPopUpMessage