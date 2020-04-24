import { get_input_success, input_table_off } from './input_types'

const input_state = {
    data: [],
    table: false
}

const input_reducer = (state = input_state, action) => {
    switch(action.type){
        case get_input_success:
            return{
                ...state,
                data: action.payload,
                table: true
            }
        case input_table_off:
            return{
                ...state,
                table: false
            }
        default: return state      
    }
}

export default input_reducer