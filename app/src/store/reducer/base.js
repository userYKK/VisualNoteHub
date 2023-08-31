import * as TYPES from "@/store/action-types";
import _ from "@/assets/utils";
let initial = {
    info: null
}
export default function BaseReducer(state = initial, action) {
    state = _.clone(state);
    switch (action.type) {
        default:
            break;
    }

    return state;
}