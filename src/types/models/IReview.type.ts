import { IProduct, IUser } from ".."


export interface IReview {
  _id: string
  user: IUser
  product: IProduct
  title: string
  rating: number
  comment: string
  status: number
  positivePoints: {
    id: string
    title: string
  }[]
  negativePoints: {
    id: string
    title: string
  }[]
  createdAt: Date
  updatedAt: Date
}
