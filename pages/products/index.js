import fetch from "isomorphic-unfetch";
import { Box } from "reflexbox";
import Pagination from "./../../components/Pagination";

export default function Products({ products, page, count }) {
  return (
    <Box variant="container" pt={40}>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.Name}</h3>
          </li>
        ))}
      </ul>
      <Pagination page={page} count={count} url="/products?page=" />
    </Box>
  );
}

export async function getServerSideProps({ query: { page = 1 } }) {
  const { API_URL } = process.env;
  const start = parseInt(page) === 1 ? 0 : (parseInt(page) - 1) * 3;

  const res = await fetch(`${API_URL}/products?_limit=3&_start=${start}`);
  const data = await res.json();
  const countResponse = await fetch(`${API_URL}/products/count`);
  const count = await countResponse.json();

  return {
    props: {
      products: data,
      page: parseInt(page),
      count: count,
    },
  };
}
