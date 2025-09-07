
const initialState = {
  isExpand: false
}

export const sideReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SET_EXPAND': {
      return {
        ...state,
        isExpand: action.payload
      }
    }
    default:
      return state;
  }
}