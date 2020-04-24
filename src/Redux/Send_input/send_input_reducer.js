import { send_input_request, send_input_success, send_input_failure, send_table_off, send_table_on } from './send_input_types'

const send_input_state = {
    loading: false,
    table: false,
    data: [],
    error: ''
}

const send_input_reducer = (state = send_input_state, action) => {
    switch(action.type){
        case send_input_request:
            return{
                ...state,
                loading: true
            }
        case send_table_off:
            return{
                ...state,
                table: false
            }
        case send_table_on:
            return{
                ...state,
                table: true
            }
        case send_input_success:
            return{
                ...state,
                loading: false,
                table: true,
                data: action.payload,
                error: ''
            }
        case send_input_failure:
            return{
                ...state,
                loading: false,
                data: [],
                error: action.payload

            }
        default: return state      
    }
}

export default send_input_reducer