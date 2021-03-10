import * as actionTypes from '../action/actionTypes'

const initialState = {
    totalPrice: 2,
    ingredients: {
        salad: 0,
        Cheese: 0,
        bacon: 1,
        meat: 0
    },
    error: false
};


const INGREDIENT_PRICE = {
    salad: 0.5,
    Cheese: 0.4,
    bacon: 0.7,
    meat: 1.3
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
          
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
                },
                totalPrice: state.totalPrice + INGREDIENT_PRICE[action.ingredientName]

            }
        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                },
                totalPrice: state.totalPrice - INGREDIENT_PRICE[action.ingredientName]


            }
        case actionTypes.SET_INGREDIENTS:
            return {
                ...state,
                ingredients: {
                    salad: action.ingredients.salad,
                    bacon: action.ingredients.bacon,
                    Cheese: action.ingredients.Cheese,
                    meat: action.ingredients.meat

                },
                error: true
            }

        case actionTypes.FETCH_INGREDIENTS_FAILED:
            return {
                ...state,
                error: true
            }
        default:
            return { ...state }
    }

};


export default reducer;