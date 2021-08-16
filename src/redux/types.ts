export interface IAction<T> {
  type: string
  payload: T
}

export interface InitState<T> {
  [propName:string]:T
}

export interface Action<T = any> {
  type: T
}

export interface AnyAction extends Action {
  [extraProps: string]: any
}

export interface Dispatch<A extends Action = AnyAction> {
  <T extends A>(action: T): T
}