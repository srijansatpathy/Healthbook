export default function AppReducer(state, action){
    switch(action.type) {
      case 'GET_ACCOUNTS':
        return {
          ...state,
          accounts: action.payload
        }
    case 'ACCOUNTS_ERROR':
        return {
            ...state,
            error: action.payload
        }
    case 'DELETE_ACCOUNTS':
      return {
        ...state,
        accounts: state.accounts.filter(account => account._id !== action.payload)
    }
    case 'SET_USER':
      return {
        ...state,
        user: action.payload
    }
      default:
        return state;
    }
  }
