import {ClientModel} from "../models/client.model";
import {All, ClientActionTypes} from "./client.actions";

export interface ClientState {
  isAuthenticated: boolean;
  client: ClientModel | null;
}

export const initialState: ClientState = {
  isAuthenticated: false,
  client: null,
};

export function reducer(action: All, state = initialState): ClientState {
  switch (action.type) {
    case ClientActionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true
      };
    }
    case ClientActionTypes.LOGIN_FAILURE: {
      return {
        ...state
      };
    }
    case ClientActionTypes.LOGOUT: {
      return initialState;
    }
    default: {
      return state;
    }
  }
}
