// State argument is not application state, only the State
// this reducer is responsible for
export default function(state = null, action) { // when argument is undefined, the default state set to null

  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;  // always return a fresh object
  }

  return state;
}
