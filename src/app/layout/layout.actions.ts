import { Action } from '@ngrx/store';

export enum Types {
  TOGGLE_SIDEMENU = '[LAYOUT] Toggle Sidemenu'
}

export class ToggleSideMenu implements Action {
  readonly type = Types.TOGGLE_SIDEMENU;

  constructor(public payload?: any) {}
}

export type LayoutActions = ToggleSideMenu;
