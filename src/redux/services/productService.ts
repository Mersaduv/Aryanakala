import { apiService } from "../api/api";

const productService = apiService.injectEndpoints({
  endpoints: (build) => ({
    getProduct: build.query<null, null>({
      query: () => ({ method: "GET", url: "products" }),
    }),
    getProductById: build.query<null, any>({
      query: (id: any) => ({ method: "GET", url: `product/${id}` })
    }),
    searchProductByName: build.query<null, any>({
      query: (name: any) => ({ method: "GET", url: `product/search?q=${name}` })
    }),
  }),
});

export const {
  useGetProductQuery,
  useGetProductByIdQuery,
  useSearchProductByNameQuery
} = productService;