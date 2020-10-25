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
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const getPage = (page) => (parseInt(page) === 1 ? 0 : (parseInt(page) - 1) * 3);

  const start = getPage(page);
  const data = await fetcher(`${API_URL}/products?_limit=3&_start=${start}`);
  const count = await fetcher(`${API_URL}/products/count`);

  return {
    props: {
      products: data,
      page: parseInt(page),
      count: count,
    },
  };
}
