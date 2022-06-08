const listActions = {
    addToList: 'addToList',
    addMultipleToList: 'addMultipleToList',
    removeOneFromList: 'removeFromList',
    removeItemFromList: 'removeItemFromList',
    emptyList: 'emptyList',
}

function bookActionReducer(list=[], {type, book}){
    switch(type){
        case listActions.addToList:
            return [...list, book];
        case listActions.addMultipleToList:
            return [...list, ...book];
        case listActions.removeOneFromList:
            let newList = list.slice()
            for (let listBook of newList){
                if (listBook.id === book.id){
                    newList.splice(newList.indexOf(listBook), 1)
                    return newList;
                }
            }
            return newList;
        case listActions.removeItemFromList:
            return list.filter((listBook) => book.id !== listBook.id);
        case listActions.emptyList:
            return []
        default:
            throw new Error('Invalid action.')
    }   
}

export {bookActionReducer, listActions}