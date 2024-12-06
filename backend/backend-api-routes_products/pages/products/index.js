import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((response) => response.json());

export default function Products() {
  const { data: products, error, isLoading } = useSWR("/api/products", fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <ul>
      {products.map((product) => {
        return (
          <li key={product.id}>
            <h2>Name: {product.name}</h2>
            <p>Description: {product.description}</p>
            <p>
              Price: {product.price} {product.currency}
            </p>
            <p>Category: {product.category}</p>
          </li>
        );
      })}
    </ul>
  );
}
