import React from "react";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import { rem } from "polished";
import { Flex } from "reflexbox";

export default function Pagination({ page, count, url }) {
  const router = useRouter();
  const pagesArray = Array.from({ length: Math.ceil(count / 3) }, (v, k) => k + 1);

  console.log(router);

  return (
    <Flex mt={40} pl={20} justifyContent={"start"} maxWidth={600}>
      <StyledPaginationButton onClick={() => router.push(`${url}1`)} disabled={page <= 1}>
        {"<<"}
      </StyledPaginationButton>
      <StyledPaginationButton onClick={() => router.push(`${url}${page - 1}`)} disabled={page <= 1}>
        Prev
      </StyledPaginationButton>
      {pagesArray.map((page) => (
        <StyledPaginationButton
          className={router.query.page == page ? "active" : ""}
          key={page}
          onClick={() => router.push(`${url}${page}`)}
        >
          {page}
        </StyledPaginationButton>
      ))}
      <StyledPaginationButton
        onClick={() => router.push(`${url}${page + 1}`)}
        disabled={page >= Math.ceil(count / 3)}
      >
        Next
      </StyledPaginationButton>
      <StyledPaginationButton
        onClick={() => router.push(`${url}${Math.ceil(count / 3)}`)}
        disabled={page >= Math.ceil(count / 3)}
      >
        {">>"}
      </StyledPaginationButton>
    </Flex>
  );
}

const StyledPaginationButton = styled.button`
  color: #ccc;
  background-color: #111;
  padding: 10px 20px;
  border-radius: 2px;
  font-size: ${rem(10)};
  line-height: ${rem(1.125)};
  width: auto;
  margin-right: 5px;

  &:hover {
    color: #111;
    background-color: #ccc;
  }

  &:focus {
    outline: #ccc;
  }

  &.active {
    color: #111;
    background-color: #ccc;
  }

  &:disabled {
    display: none;
  }
`;
