export function selectBook(book) {
  // SelectBook is an ActionCreator, it needs to return an action,
  // an object with a type property.
  return {
    type: 'BOOK_SELECTED',  // always upper case
    payload: book // the amount of goods
  }
}
