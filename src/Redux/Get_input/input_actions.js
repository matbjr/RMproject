import { get_input_success, input_table_off } from "./input_types"

export const getInputSuccess = data => {
    return{
        type: get_input_success,
        payload: data
    }
}
export const inputTableOff = () => {
    return{
        type: input_table_off
    }
}

