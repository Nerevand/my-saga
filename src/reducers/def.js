export default function counter(state = [], action) {
  if (action.type === 'INCREMENT') return { ...state, data: action.payload }
  else return state
}