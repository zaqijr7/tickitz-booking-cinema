const stateSchedule = {
    type: "SCHEDULE",
    showDate: '',
    city: ''
}

const scheduleReducer = (state = stateSchedule, action) => {
    switch (action.type) {
        case 'INPUT_DATE':
            return {
                ...state,
                showDate: action.payload
            }
        case 'INPUT_CITY':
            return {
                ...state,
                city: action.payload
            }
        default:
            return {
                ...state
            }
    }
}

export default scheduleReducer