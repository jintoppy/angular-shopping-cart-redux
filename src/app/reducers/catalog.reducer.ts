const initialState = {
    products: [],
    activeProduct: null
};

export const catalogreducer = (state = initialState, action) => {
    switch(action.type){
        case 'PRODUCTS_LIST_RECEIVED':
            return {
                ...state,
                products: action.payload
            };
            
        case 'PRODUCT_DETAILS_RECEIVED':
        break;
    }
    return state;
};