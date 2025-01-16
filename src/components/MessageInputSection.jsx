import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { SendOutlined, PaperClipOutlined, AudioOutlined } from '@ant-design/icons'
import TextInput from './custom/TextInput'
import '../styles/message-input-section.scss'
import { useSelector } from 'react-redux'

const MessageInputSection = ({ text = '' }) => {
  const [message, setMessage] = useState(text)
  const theme = useSelector((state) => state.ui.theme)

  useEffect(() => {
    setMessage(text)
  }, [text])

  const handleSend = () => {
    if (message.trim()) {
      console.log("message: ", message);
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
