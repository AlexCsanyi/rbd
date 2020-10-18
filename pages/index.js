import fetch from "isomorphic-unfetch";
import { Box, Flex } from "reflexbox";
import Card from "../components/Card";

export default function Home({ products }) {
  console.log(products);

  return (
    <Box variant="container">
      <Box as="h2" my={40}>
        Featured Products
      </Box>
      <Flex justifyContent="space-between" flexDirection={{ _: "column", md: "row" }} mb={100}>
        {products.map((product) => (
          <Box key={product.id} width={{ _: "100%", md: "30%" }}>
            <Card product={product}></Card>
          </Box>
        ))}
      </Flex>
    </Box>
  );
}

export async function getServerSideProps() {
  const { API_URL } = process.env;

  const res = await fetch(`${API_URL}/products`);
  const data = await res.json();

  return {
    props: {
      products: data,
    },
  };
}
