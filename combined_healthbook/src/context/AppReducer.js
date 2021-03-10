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
      default:
        return state;
    }
  }
