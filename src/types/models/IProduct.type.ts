import { ICategory, IColor, ISize } from ".."

export interface IProduct {
  id: string
  title: string
  slug: string
  price: number
  description: string
  discount: number
  images:string
  sizes: ISize[] | []
  colors: IColor[] | []
  category: string[]
  inStock: number
  sold: number
  info: { title: string; value?: string }[]
  rating: number
}

