import React, { useState } from 'react'
import { Card, message, Tooltip } from 'antd'
import { Row, Col } from 'react-bootstrap'
import { DownloadOutlined, DeleteOutlined, SaveOutlined, SearchOutlined } from '@ant-design/icons'
import '../styles/web-scraper.scss'
import TextInput from './custom/TextInput'
import { wsOptions } from '../services/helpers'
import SelectInput from './custom/SelectInput'
import ActionButton from './custom/ActionButton'
import BoxWrapper from './containers/BoxWrapper'
import { useSelector } from 'react-redux'

const WebScraper = () => {
  const [url, setUrl] = useState('')
  const [scrapText, setScrapText] = useState('')
  const [contentType, setContentType] = useState('')
  const [scrapedData, setScrapedData] = useState([])
  const theme = useSelector((state) => state.ui.theme)

  const handleScrape = () => {
    if (!url) {
      message.error('Please enter a valid URL')
      return
    }
    if (!contentType) {
      message.error('Please select a content type')
      return
    }
    if (contentType === 'text' && !scrapText) {
      message.error('Please enter text to scrap')
      return
    }
    // Simulate API call to scrape data
    setTimeout(() => {
      setContentType('')
      setScrapedData(['Sample Data 1', 'Sample Data 2', 'Sample Data 3'])
      message.success('Scraping completed successfully')
    }, 1500)
  }

  return (
    <BoxWrapper>
      <Row>
        <Col sm={12} lg={4}>
          <Row className='mt-3'>
            <Col sm={12} lg={7}>
              <TextInput
                type='text' 
                value={url} 
                onChange={(event) => setUrl(event.target.value)} 
                placeholder="Enter website URL"
                className={`${theme} light w-100 py-1 mt-2`}
                allowClear={true} 
              />
            </Col>
            <Col sm={12} lg={5}>
              <SelectInput
                placeholder="Choose a content type"
                value={contentType}
                onChange={(event) => setContentType(event.target.value)}
                options={wsOptions}
                style={{ width: '100%' }}
                className={`${theme} light w-100 mt-2`}
              />
            </Col>
          </Row>

          { contentType === 'text' && (
            <Row className='mt-3'>
              <Col sm={12} lg>
                <TextInput
                  type='text' 
                  isTextArea
                  value={scrapText} 
                  rows={4}
                  onChange={(event) => setScrapText(event.target.value)} 
                  placeholder="Enter Text to Scrap"
                  className={`${theme} light w-100 py-1 mt-2`}
                  allowClear={true} 
                />
              </Col>
            </Row>
          )}
          
          <Row className='mt-3'>
            <Col sm={12} lg>
              <ActionButton 
                type="primary" 
                icon={<SearchOutlined />} 
                onClick={handleScrape}
                className='w-100 py-2'
              >
                Scrape
              </ActionButton>
            </Col>
          </Row>
        </Col>

        <Col sm={12} lg={8}>
          <div className="scraped-content-display">
            <Row className='mt-3'>
              {scrapedData.map((item, index) => (
                <Col className="mb-2" sm={12} lg={4} key={index}>
                  <Card>{item}</Card>
                  {scrapedData.length > 0 && (
                    <div className="download-save-controls mt-2 gap-1 d-flex justify-content-between">
                      <Tooltip color='darkblue' placement="bottomRight" title="Download">
                        <ActionButton 
                          type="primary" 
                          icon={<DownloadOutlined className='text-primary' />} 
                          onClick={handleScrape}
                          variant='outline-dark'
                        ></ActionButton>
                      </Tooltip>
                      <Tooltip color='darkblue' placement="bottomRight" title="Save">
                        <ActionButton 
                          type="primary" 
                          icon={<SaveOutlined className='text-success' />} 
                          onClick={handleScrape}
                          variant='outline-dark'
                        ></ActionButton>
                      </Tooltip>
                      <Tooltip color='darkblue' placement="bottomRight" title="Delete">
                        <ActionButton 
                          type="primary" 
                          icon={<DeleteOutlined className='text-danger' />} 
                          onClick={handleScrape}
                          variant='outline-dark'
                        ></ActionButton>
                      </Tooltip>
                    </div>
                  )}
                </Col>
              ))}
            </Row>
          </div>
        </Col>
      </Row>
    </BoxWrapper>
  )
}

export default WebScraper
