import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((response) => response.json());

export default function HomePage() {
  const { data, error, isLoading } = useSWR("api/random-character", fetcher);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return <h1>Hello from Next.js!</h1>;
}
