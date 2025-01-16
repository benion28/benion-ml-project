import React, { useEffect, useState } from 'react'
import ChatBoxWrapper from './containers/ChatBoxWrapper'
import MessageDisplayArea from './MessageDisplayArea'
import MessageInputSection from './MessageInputSection'
import ChatFooterSection from './footer/ChatFooterSection'
import ChatHistoryPanel from './ChatHistoryPanel '
import { Col, Row } from 'react-bootstrap'
import ChatHeaderSection from './header/ChatHeaderSection'
import ChatSuggestions from './ChatSuggestions'
import { conversations as localConversations, messages as localMessages, suggestions as localSuggestions } from '../services/helpers'

const ChatBot = () => {
    const [chatHeader, setChatHeader] = useState({ title: 'AI Chat Box' })
    const [chatSuggestion, setChatSuggestion] = useState({ text: '' })
    const [messages, setMessages] = useState([])
    const [conversations, setConversations] = useState([])
    const [suggestions, setSuggestions] = useState([])

    useEffect(() => {
        if (localConversations.length > 0) {
            setConversations(localConversations)
        }
        if (localConversations.length > 0) {
            setChatHeader(localConversations[0])
        }
        if (localMessages.length > 0) {
            setMessages(localMessages)
        }
        if (localSuggestions.length > 0) {
            setSuggestions(localSuggestions)
        }
    }, [])

    return (
        <ChatBoxWrapper> 
            <Row className='py-3'>
                <Col sm={12} lg={3} className="mb-4">
                    <ChatHistoryPanel 
                        chatHistory={conversations}
                        onSelectConversation={(index) => setChatHeader(conversations[index])} 
                        onEdit={(id) => console.log('Selected edit id:', id)} 
                        onDelete={(id) => console.log('Selected delete id:', id)} 
                    />
                </Col>
                <Col sm={12} lg={6} className="mb-4">
                    <ChatHeaderSection title={chatHeader?.title} />
                    <MessageDisplayArea messages={messages} />
                    <MessageInputSection text={chatSuggestion?.text}  />
                </Col>
                <Col sm={12} lg={3} className="mb-4">
                    <ChatSuggestions
                        suggestions={suggestions}
                        onSelectChatSuggestion={(index) => setChatSuggestion(suggestions[index])}
                    />
                </Col>
            </Row>
            <ChatFooterSection />
        </ChatBoxWrapper>
  )
}

export default ChatBot