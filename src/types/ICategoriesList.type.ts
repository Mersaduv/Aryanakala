import { ICategory } from ".";

export default interface ICategoriesList extends ICategory {
  children?: ICategoriesList[]
}
