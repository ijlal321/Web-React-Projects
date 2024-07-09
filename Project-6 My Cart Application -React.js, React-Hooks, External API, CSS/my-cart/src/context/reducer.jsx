// reducer.js
export default (state, action) => {
    switch (action.type) {
        case "increase amount":
            return {
                ...state,
                [action.payload]: (state[action.payload] || 0) + 1
            };

        case "decrease amount":
            return {
                ...state,
                [action.payload]: Math.max(0, (state[action.payload] || 0) - 1)
            };
        
        case "remove product":
            return{
                ...state,
                [action.payload]:0
            }

        default:
            return state;
    }
};
