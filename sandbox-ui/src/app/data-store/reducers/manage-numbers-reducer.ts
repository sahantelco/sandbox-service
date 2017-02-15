import {IManageNumberState} from "../models/common-models";
import {Action} from "@ngrx/store";
export const OPEN_ADD_NUMBER: string = 'OPEN_ADD_NUMBER';

const initialState: IManageNumberState = {
    isEditorPanelOpen: false,
    selectedNumber: null
};

export function ManageNumberReducer(manageNumberState: IManageNumberState = initialState, action: Action): IManageNumberState {
    switch (action.type) {

        case OPEN_ADD_NUMBER : {
            return Object.assign({}, manageNumberState,
                {
                    isEditorPanelOpen: !manageNumberState.isEditorPanelOpen,
                    selectedNumber : null
                }
            );
        }

        default : {
            return manageNumberState;
        }
    }
}