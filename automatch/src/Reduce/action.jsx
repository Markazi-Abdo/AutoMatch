export const SET_SELECTED_OPTION = "SET_SELECTED_OPTION";

export const setSelectedOption = (option) => {
    return {
        type: SET_SELECTED_OPTION,
        payload: option,
        
    };
};