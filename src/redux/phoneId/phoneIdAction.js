import { SET_PHONE_ID } from "./phoneIdType";

export const setPhoneId = (phoneId) => {
    return {
        type: SET_PHONE_ID,
        payload: phoneId
    }
}