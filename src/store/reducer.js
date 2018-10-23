const InitialStore = {
    feedObj : [],
    tempURL: {}
};

const reducer = (state = InitialStore, action)=>{

    switch(action.type){
        case 'FEEDSUBMIT':
            let resObj = action.payload.feedobj;
            return {
            ...state,
                feedObj: state.feedObj.concat(resObj)
        };

        case 'FEEDCLOSE':

            return {
            ...state,
                feedObj : state.feedObj.filter( el => action.payload !== el.feed.url)
        };
        case 'FEEDCLICK': return {
            ...state,
            tempURL: action.payload
        };
    }

    return state;
};

export default reducer;