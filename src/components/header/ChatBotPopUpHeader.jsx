import React from 'react'
import ChatBotIcon from '../ChatBotPopUpIcon'
import { Link } from 'react-router-dom'
import paths from '../../services/paths'

const ChatBotPopUpHeader = ({ setShowChatbot }) => {
  return (
    <div className="chat-header">
        <div className="header-info">
            <ChatBotIcon />
            <h2 className="logo-text">Chatbot</h2>
        </div>
        <Link to={paths.aiUrl} className='text-decoration-none'>
            <button>
                <span className="material-symbols-rounded">open_in_full</span>
            </button>
        </Link>
        <button>
            <span onClick={() => setShowChatbot(prev => !prev)} className="material-symbols-rounded">keyboard_arrow_down</span>
        </button>
    </div>
  )
}

export default ChatBotPopUpHeader