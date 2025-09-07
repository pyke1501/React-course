
const initialState = {
  isLoading: false
}

export const appReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SHOW_LOADING': {
      return {
        ...state,
        isLoading: true
      }
    }
    default:
      return state;
  }
}