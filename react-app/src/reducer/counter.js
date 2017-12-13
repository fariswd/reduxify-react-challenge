const initialState = {
  counter: 1000000
}

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {...state, counter: state.counter + 1}
    case 'DECREMENT':
      return {...state, counter: state.counter - 1}
    default:
      return state
  }
}

export default reducer
