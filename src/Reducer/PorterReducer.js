export const PorterReducer = (state, action) => {
    switch (action.type) {
        case "value":
        
            const adding = {
                name: action.data
            }
            const newAllData = [...state.doctors, adding]

            return {
                ...state,
                theData: newAllData
            }
            break;

        default:
            return {
                state
            }
            break;
    }

}