import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";

export default function Card({ product }) {
  const { API_URL } = process.env;

  return (
    <StyledCard>
      <div className="poster">
        <img src={API_URL + product.Image.url} />
      </div>
      <div className="body">
        <h3>{product.Name}</h3>
        <p>{product.Description}</p>
        <Link href="/products/[brand]/[slug]" as={`/products/${product.brand.slug}/${product.slug}`}>
          <a>Find out more</a>
        </Link>
      </div>
    </StyledCard>
  );
}

const StyledCard = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid #cccccc;
  margin-top: 50px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  .body {
    padding: 20px;

    h3 {
      margin-bottom: 20px;
    }

    p {
      color: #666666;
      line-height: 1.5;
    }

    a {
      display: inline-block;
      margin: 20px 0;
    }
  }
`;
