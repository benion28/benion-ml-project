import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { SendOutlined, PaperClipOutlined, AudioOutlined } from '@ant-design/icons'
import TextInput from './custom/TextInput'
import '../styles/message-input-section.scss'
import { useSelector } from 'react-redux'
import useChat from '../state/hooks/useChat'

const MessageInputSection = ({ text = '' }) => {
  const [message, setMessage] = useState(text)
  const theme = useSelector((state) => state.ui.theme)
  const { chat } = useSelector((state) => state.chat)
  const { user } = useSelector((state) => state.auth)
  const { sendChat, getAllChats } = useChat()

  useEffect(() => {
    setMessage(text)
  }, [text])

  const handleSend = () => {
    if (message.trim()) {
      console.log("message: ", message)
      let data
      const requestData = {
          message,
          modelType: "gemini-1.5-flash",
          senderName: `${user.firstName } ${ user.lastName}`,
          senderId: user._id,
          role: "user"
      }

      if (chat) {
        data = {
          ...chat,
          ...requestData
        }
      } else {
        data = requestData
      }

      sendChat(data)
      getAllChats()
      setMessage('') // Clear input after sending
    }
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSend()
    }
  }

  return (
    <div className={`message-input-section ${theme}`}>
      <PaperClipOutlined className="icon attachment-icon" />
      <TextInput
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            className={`${theme}`}
        />
      <AudioOutlined className="icon mic-icon" />
      <button className="send-button" onClick={handleSend}>
        <SendOutlined />
      </button>
    </div>
  )
}

MessageInputSection.propTypes = {
  text: PropTypes.string.isRequired
}

export default MessageInputSection
