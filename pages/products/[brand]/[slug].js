import { Box, Flex } from "reflexbox";
import fetch from "isomorphic-unfetch";
import getConfig from "next/config";
import { NextSeo } from "next-seo";

export default function Product({ product }) {
  const SEO = {
    title: `RB Dream | ${product.Name}`,
    description: `${product.Name}`,

    openGraph: {
      title: `${product.Name}`,
      description: `${product.Name}`,
    },
  };

  return (
    <>
      <NextSeo {...SEO} />
      <Box variant="container">
        <Box as="h2" my={40}>
          {product.Name}
        </Box>
        <Box maxWidth="600">{product.Description}</Box>
      </Box>
    </>
  );
}

const { publicRuntimeConfig } = getConfig();

export async function getServerSideProps(context) {
  const { slug } = context.query;
  const res = await fetch(`${publicRuntimeConfig.API_URL}/products?slug=${slug}`);
  const data = await res.json();

  return {
    props: {
      product: data[0],
    },
  };
}
