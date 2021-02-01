const initialState = {
   type: 'REGISTER',
   email: null,
   message: '',
}

const registerReducer = (state = initialState, action) => {
   switch (action.type) {
      case 'REGISTER':
         return {
            ...state,
            email: action.payload
         }
      case 'SET_REGISTER_MESSAGE':
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

export default registerReducer