import { ICart, IUser } from ".."

export interface IOrder {
  _id: string
  user: IUser
  address: {
    provinces: string
    city: string
    street: string
    postalCode: string
  }
  mobile: string
  cart: ICart[]
  totalItems: number
  totalPrice: number
  totalDiscount: number
  paymentMethod: string
  delivered: boolean
  paid: boolean
  dateOfPayment: Date
  updatedAt: Date
}
