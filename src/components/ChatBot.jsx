import React, { useEffect, useRef, useState } from 'react'
import ChatBoxWrapper from './containers/ChatBoxWrapper'
import MessageDisplayArea from './MessageDisplayArea'
import MessageInputSection from './MessageInputSection'
import ChatFooterSection from './footer/ChatFooterSection'
import ChatHistoryPanel from './ChatHistoryPanel '
import { Col, Row } from 'react-bootstrap'
import ChatHeaderSection from './header/ChatHeaderSection'
import ChatSuggestions from './ChatSuggestions'
import { chatGreeting, suggestions as localSuggestions } from '../services/helpers'
import useChat from '../state/hooks/useChat'
import { useSelector } from 'react-redux'

const ChatBot = () => {
    const [chatSuggestion, setChatSuggestion] = useState({ text: '' })
    const [suggestions, setSuggestions] = useState([])
    const { getAllChats, selectChat } = useChat()
    const { chats, chat } = useSelector((state) => state.chat)
    const suggestionRef = useRef(null);

    const onSugestionClick = () => {
        if (suggestionRef.current) {
            suggestionRef.current.scrollTop = suggestionRef.current.scrollHeight
        }
    }

    useEffect(() => {
        if (localSuggestions.length > 0) {
            setSuggestions(localSuggestions)
        }
        getAllChats()
    }, [])

    

    return (
        <ChatBoxWrapper> 
            <Row className='py-3'>
                <Col sm={12} lg={3} className="mb-4">
                    <ChatHistoryPanel 
                        chatHistory={chats ? chats : []}
                        onSelectConversation={(index) => selectChat(chats[index])} 
                        onEdit={(id) => console.log('Selected edit id:', id)} 
                    />
                </Col>
                <Col sm={12} lg={6} className="mb-4">
                    <ChatHeaderSection title={chat?.title ? chat?.title : "New Chat"} />
                    <MessageDisplayArea history={chat?.history ? chat?.history : chatGreeting } />
                    <MessageInputSection suggestionRef={suggestionRef} text={chatSuggestion?.text}  />
                </Col>
                <Col sm={12} lg={3} className="mb-4">
                    <ChatSuggestions
                        suggestions={suggestions}
                        onSelectChatSuggestion={
                            (index) => {
                                setChatSuggestion(suggestions[index])
                                onSugestionClick()
                            }
                        }
                    />
                </Col>
            </Row>
            <ChatFooterSection />
        </ChatBoxWrapper>
  )
}

export default ChatBot