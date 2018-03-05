const searchFilter = (state = '', action) => {
    switch (action.type) {
        case 'SEARCH_TODO':
            return action.search
        default:
            return state;
    }
}

export default searchFilter