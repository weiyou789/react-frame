export interface IAction<T> {
  type: string
  payload: T
}

export interface InitState<T> {
  [propName:string]:T
}