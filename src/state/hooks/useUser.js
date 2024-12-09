import { useDispatch } from 'react-redux';
import { requestMethod } from '../../services/helpers';
import usersRequest from '../requests/usersRequest';

const useUser = () => {
  const dispatch = useDispatch();
  const usersUrl = 'benion-users/api'

  const makeUsersRequest =  {
    getUsers: async () => {
      return await usersRequest({
        url: `${usersUrl}/users`,
        method: requestMethod.get,
        dispatch, 
        successMessage: 'Users' 
      })
    },
    // createUser: async (user) => {},
    // UpdateUser: async (user) => {},
    // deleteUser: async (user) => {},
  }
  return makeUsersRequest
}

export default useUser
