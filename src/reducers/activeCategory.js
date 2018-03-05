const activeCategory = (state = null, action) => {
    switch (action.type) {
        case 'SELECT_CATEGORY':
            return action.id
        default:
            return state;
    }
}

export default activeCategory