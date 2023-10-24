"use client";

import Container from "@/components/common/Container";
import Spinner from "@/components/common/loading/Spinner";
import { IProduct } from "@/components/products/types";
import { useGetProductQuery } from "@/redux/services/productService";

export default function Home() {
  // const { data, isLoading } = useGetProductQuery(null);
  // const productData: IProduct[] | null | any = data;
  // if (isLoading) {
  //   return <Spinner />;
  // }
  return (
    <main>
      <Container>
        <div>سلام این تست است و برای تنظیم فونت سایت میباشد</div>
      </Container>
    </main>
  );
}
