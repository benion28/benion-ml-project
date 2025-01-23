import React from 'react'
import ChatBotPopUpIcon from './ChatBotPopUpIcon'
import { useSelector } from 'react-redux'

const ChatBotPopUpMessage = ({ chat }) => {
  const { isTyping, isError, error } = useSelector((state) => state.chat)
  const { Fragment } = React
  return (
    <Fragment>
      <div className={`message ${chat.role === "model" ? "bot" : "user"}-message ${chat.isError ? "error" : ""}`}>
          {chat.role === "model" && <ChatBotPopUpIcon />}
          <p className="message-text">{chat.message}</p>
      </div>
      { isTyping && 
        <div className="message bot-message">
            <ChatBotPopUpIcon />
            <p className="message-text">Thinking...</p>
        </div>
      }
      { isError && 
        <div className="message bot-message error">
            <ChatBotPopUpIcon />
            <p className="message-text">
              {isError ? error : "Thinking..."}
            </p>
        </div>
      }
    </Fragment>
  )
}

export default ChatBotPopUpMessage