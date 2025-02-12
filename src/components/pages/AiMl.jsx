import React, { useState } from 'react'
import TitleNav from '../custom/TitleNav'
import { useSelector } from 'react-redux'
import { aiOptions, getThemeColor } from '../../services/helpers'
import DashCard from '../custom/DashCard'
import SelectInput from '../custom/SelectInput'
import ChatBot from '../ChatBot'
import WebScraper from '../WebScraper'

const AiMl = () => {
  const theme = useSelector((state) => state.ui.theme)
  const [selectedOption, setSelectedOption] = useState('chat-bot')
  const getSelectedOption = () => {
    const selected = aiOptions.find((option) => option.value === selectedOption)
    return selected ? selected.label : 'Chat Bot'
  }

  return (
    <div className='px-4' style={{ paddingTop: "120px", paddingBottom: "10px", backgroundColor: getThemeColor(theme).color  }}>
      <TitleNav 
        title={`AI & ML - (${getSelectedOption()})`}
        theme={theme} 
        actions={
          <div className="px-4">
            <SelectInput
              placeholder="Choose an option"
              value={selectedOption}
              onChange={(event) => setSelectedOption(event.target.value)}
              options={aiOptions}
            />
          </div>
        }
      />
      <DashCard
        title={getSelectedOption()}
        containerClass={`${theme}`}
        contentClass="content-class"
        reversed={false}
      >
        { selectedOption === 'chat-bot' && <ChatBot /> }
        { selectedOption === 'web-scraping' && <WebScraper /> }
      </DashCard>
    </div>
  )
}

export default AiMl