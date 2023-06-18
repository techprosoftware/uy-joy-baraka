import { SET_PHONE } from "./phoneType";

export const setPhone = (phone) => {
    return {
        type: SET_PHONE,
        payload: phone
    }
}