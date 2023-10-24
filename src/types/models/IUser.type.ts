import { IAddress } from ".."



export interface IUser {
  _id: string
  name: string
  email: string
  password: string
  role: 'root' | 'user' | 'admin'
  mobile: string
  address?: IAddress
}
