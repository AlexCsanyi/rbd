import React from "react";
import styled from "@emotion/styled";
import { rem } from "polished";
import { Box, Flex } from "reflexbox";
import Navigation from "./Navigation";
import Link from "next/link";

export default function Header({ isDark, navigation }) {
  return (
    <StyledHeader isDark={isDark}>
      <Box variant="container">
        <Flex justifyContent="space-between" alignItems="center">
          <div className="logo">
            <Link href="/">
              <a>
                <img src="/assets/logo.svg" alt="brand logo" />
                <span className="logo-text">Brand Name</span>
              </a>
            </Link>
          </div>
          <Navigation navigation={navigation} />
        </Flex>
      </Box>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background: ${(props) => (props.isDark ? "#000000" : "#efefef")};
  padding: 20px;

  .logo {
    a {
      display: flex;
      align-items: center;
      text-decoration: none;
    }

    .logo-text {
      color: #333333;
      font-weight: bold;
      font-size: ${rem(20)};
      margin-left: 20px;
    }
  }
`;