import React, { useRef } from 'react'
import useChat from '../../state/hooks/useChat'
import { useSelector } from 'react-redux'

const ChatBotPopUpForm = () => {
    const inputRef = useRef()
    const { sendChat, getAllChats, selectChat } = useChat()
    const { chat } = useSelector((state) => state.chat)
    const { user } = useSelector((state) => state.auth)

    const handleFormSubmit = (event) => {
        event.preventDefault()
        const userMessage = inputRef.current.value.trim()

        if (!userMessage) return
        inputRef.current.value = ""

        let data
        const requestData = {
            message: userMessage,
            modelType: "gemini-1.5-flash",
            senderName: `${user.firstName } ${ user.lastName}`,
            senderId: user._id,
            role: "user",
            save: false,
            useEmbeddedData: true
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
            history: [...chat.history, { role: 'user', message: userMessage}]
            })
        } else {
            selectChat({
            ...chat,
            history: [{ role: 'user', message: userMessage}]
            })
        }

        sendChat(data)
        getAllChats()
    }

  return (
    <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
        <input 
            type="text" 
            placeholder="Message..." 
            className="message-input" 
            required
            ref={inputRef}
        />
        <button>
            <span className="material-symbols-rounded">arrow_upward</span>
        </button>
    </form>
  )
}

export default ChatBotPopUpForm