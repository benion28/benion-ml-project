import { useDispatch } from 'react-redux'
import { requestTypes, benionMlUrl, requestMethod } from '../../services/helpers'
import chatRequest from '../requests/chatRequest'

const useChat = () => {
  const dispatch = useDispatch()

  const makeChatRequest =  {
    getAllChats: async () => {
      return await chatRequest({
        url: `${benionMlUrl}/all-chats`,
        method: requestMethod.get,
        dispatch, 
        type: requestTypes.getAll
      })
    },
    getOneChat: async (key) => {
      return await chatRequest({
        url: `${benionMlUrl}/get-chat/${key}`,
        method: requestMethod.get,
        dispatch, 
        type: requestTypes.getOne,
      })
    },
    sendChat: async (chat) => {
      const url = chat.$key ? `${benionMlUrl}/edit-chat/${chat.$key}` : `${benionMlUrl}/send-chat`
      const method = chat.$key ? requestMethod.put : requestMethod.post
      const type = chat.$key ? requestTypes.update : requestTypes.add

      return await chatRequest({
        url,
        method,
        data: chat,
        dispatch, 
        type
      })
    },
    deleteChat: async (key) => {
      return await chatRequest({
        url: `${benionMlUrl}/delete-chat/${key}`,
        method: requestMethod.delete,
        dispatch, 
        type: requestTypes.delete
      })
    },
    selectChat: async (chat) => {
      return await chatRequest({
        data: chat,
        dispatch, 
        type: requestTypes.select
      })
    }
  }
  return makeChatRequest
}

export default useChat;
