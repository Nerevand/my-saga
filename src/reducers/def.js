export default function counter(state=[], action) {
    switch (action.type) {
      case 'INCREMENT':
        return {...state, data: action.payload}
      default:
        return state
    }
  }