const initialState = {
   type: 'LOGIN',
   token: null,
   message: '',
}

const authReducer = (state = initialState, action) => {
   switch (action.type) {
      case 'LOGIN':
         return {
            ...state,
            token: action.payload
         }
      case 'SET_LOGIN_MESSAGE':
         return {
            ...state,
            message: action.payload
         }
      default:
         return {
            ...state
         }
   }
}

export default authReducer