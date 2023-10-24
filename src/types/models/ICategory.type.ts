
export interface ICategory {
  _id: string
  name: string
  slug: string
  parent?: string
  image: string
  colors?: { start: string; end: string }
  level: number
  children?: ICategory[]
}

