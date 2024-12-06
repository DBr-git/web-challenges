import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((response) => response.json());

export default function Details() {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);

  const {
    data: product,
    error,
    isLoading,
  } = useSWR(`/api/products/${id}`, fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <h2>Name: {product.name}</h2>
      <p>Description: {product.description}</p>
      <p>
        Price: {product.price} {product.currency}
      </p>
      <p>Category: {product.category}</p>
    </>
  );
}
