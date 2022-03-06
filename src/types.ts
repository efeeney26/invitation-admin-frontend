export interface IGuest {
  _id: string
  name: string
  invitation?: string
  accept: boolean
}

export enum MODE {
  success = 'success',
  error = 'error',
  gradient = 'gradient',
  info = 'info',
}
