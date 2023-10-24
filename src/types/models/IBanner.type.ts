
export interface IBanner {
  _id: string
  category_id: string
  image: {
    url: string
  }
  title: string
  uri?: string
  isPublic: boolean
  type: string
}
