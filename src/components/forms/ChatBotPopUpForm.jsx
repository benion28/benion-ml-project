import React, { useRef } from 'react'

const ChatBotPopUpForm = ({ setChatHistory, generateBotResponse, chatHistory }) => {
    const inputRef = useRef()
    const handleFormSubmit = (event) => {
        event.preventDefault()
        const userMessage = inputRef.current.value.trim()

        if (!userMessage) return
        inputRef.current.value = ""

        // Update chat history with the user's message
        setChatHistory((history) => [...history, { role: 'user', text: userMessage} ])

        // Add a "Thinking..." placeholder for the bot's response
        setTimeout(() => {
            setChatHistory((history) => [...history, { role: 'model', text: "Thinking..."} ])
            // generateBotResponse([...chatHistory, { role: 'user', text: userMessage}])
            // generateBotResponse([...chatHistory, { role: 'user', text: `Using the details provided above, address this query: ${userMessage}`}])
        }, 600)
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