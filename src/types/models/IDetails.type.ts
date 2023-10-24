
export interface IDetails {
  _id: string
  category_id: string
  info: { title: string }[]
  specification: { title: string }[]
  optionsType: 'colors' | 'sizes' | 'none'
}
