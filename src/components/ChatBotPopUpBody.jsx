import React, { useEffect } from 'react'
import ChatBotPopUpIcon from './ChatBotPopUpIcon'
import ChatBotPopUpMessage from './ChatBotPopUpMessage'
import { useSelector } from 'react-redux'

const ChatBotPopUpBody = ({ chatBodyRef, chatHistory = [] }) => {
  const { isTyping, isLoading } = useSelector((state) => state.chat)

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight
    }
  }, [chatHistory, isTyping, isLoading, chatBodyRef])

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