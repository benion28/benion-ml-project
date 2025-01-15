import React, { useEffect, useState } from 'react'
import ChatBoxWrapper from './containers/ChatBoxWrapper'
import MessageDisplayArea from './MessageDisplayArea'
import MessageInputSection from './MessageInputSection'
import ChatFooterSection from './footer/ChatFooterSection'
import ChatHistoryPanel from './ChatHistoryPanel '
import { Col, Row } from 'react-bootstrap'
import ChatHeaderSection from './header/ChatHeaderSection'
import ChatSuggestions from './ChatSuggestions'
import { conversations, messages, suggestions } from '../services/helpers'

const ChatBot = () => {
    const [chatHeader, setChatHeader] = useState({ title: 'AI Chat Box' })
    const [chatSuggestion, setChatSuggestion] = useState({ text: '' })

    useEffect(() => {
        if (conversations.length > 0) {
            setChatHeader(conversations[0])
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