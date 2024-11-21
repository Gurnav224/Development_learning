export const ADD_BOOK = "book/add";
export const REMOVE_BOOK = "book/remove";

export const addBook = (book) => ({
    type:ADD_BOOK,
    payload:book
})


export const removeBook = (isbn) => ({
    type:REMOVE_BOOK,
    payload:isbn
})

