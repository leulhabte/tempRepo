import { CONSTANT } from "../../utils/constants";

// action type
export type ActionTypes = {type: typeof CONSTANT.DEFAULT; payload: boolean}


export const defaultAction = (actionProp: boolean): ActionTypes =>({
    type: CONSTANT.DEFAULT,
    payload : actionProp
})