import * as client from './client.reducers';
import {createFeatureSelector} from "@ngrx/store";

export interface AppState {
  clientState: client.ClientState;
}
export const reducers = {
  client: client.reducer
};

export const selectClientState = createFeatureSelector<AppState>('client');
