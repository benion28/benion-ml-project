import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { SendOutlined, PaperClipOutlined, AudioOutlined, StopOutlined } from '@ant-design/icons'
import TextInput from './custom/TextInput'
import '../styles/message-input-section.scss'
import { useSelector } from 'react-redux'
import useChat from '../state/hooks/useChat'

const MessageInputSection = ({ text = '' }) => {
  const [message, setMessage] = useState(text)
  const theme = useSelector((state) => state.ui.theme)
  const { chat } = useSelector((state) => state.chat)
  const { user } = useSelector((state) => state.auth)
  const { sendChat, getAllChats, selectChat } = useChat()
  const [isListening, setIsListening] = useState(false)
  let recognition

  if ('webkitSpeechRecognition' in window) {
    recognition = new window.webkitSpeechRecognition()
    recognition.continuous = true
    recognition.interimResults = false
    recognition.lang = 'en-US'
  }

  useEffect(() => {
    setMessage(text)
  }, [text])

  const handleSend = () => {
    setIsListening(false)
    if (message.trim()) {
      let data
      const requestData = {
          message,
          modelType: "gemini-1.5-flash",
          senderName: `${user.firstName } ${ user.lastName}`,
          senderId: user._id,
          role: "user",
          save: true
      }

      if (chat) {
        data = {
          ...chat,
          ...requestData
        }
      } else {
        data = requestData
      }

      if (chat?.history?.length > 0) {
        selectChat({
          ...chat,
          history: [...chat.history, { role: 'user', message}]
        })
      } else {
        selectChat({
          ...chat,
          history: [{ role: 'user', message}]
        })
      }

      sendChat(data)
      getAllChats()
      setMessage('')
    }
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSend()
    }
  }

  const handleVoiceInput = () => {
    recognition.start()
      setIsListening(true)
      recognition.onresult = (event) => {
        console.log('Speech recognition result:', event)
        const transcript = Array.from(event.results)
          .map((result) => result[0].transcript)
          .join('')
        setMessage((prevMessage) => `${prevMessage} ${transcript}`)
      }
      recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error)
      }
      recognition.onend = () => {
        console.log('Speech recognition ended')
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
        { isListening ? 
          <StopOutlined onClick={() => setIsListening(false)} className="icon mic-icon active" /> 
          :
          <AudioOutlined onClick={handleVoiceInput} className="icon mic-icon" />
        }
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
