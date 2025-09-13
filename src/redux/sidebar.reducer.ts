
const initialState = {
  isExpand: false
}

export const sideReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SIDE_BAR/SET_EXPAND': {
      return {
        ...state,
        isExpand: action.payload
      }
    }
    default:
      return state;
  }
}