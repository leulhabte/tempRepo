import { ActionTypes } from "../action";
import { CONSTANT } from "../../utils/constants";

const init: initialState = {

}

export const appReducer = (state: initialState = init, action: ActionTypes): initialState => {
    switch (action.type) {
        case CONSTANT.DEFAULT:
        default:
            return state
    }
}
