import styled from "@emotion/styled";
import { rem } from "polished";
import React from "react";

export default function Header({ isDark }) {
  return (
    <StyledHeader isDark={isDark}>
      <div className="container">
        <div className="logo">
          <img src="/images/logo.svg" alt="brand logo" />
          <span className="logo-text">Brand Name</span>
        </div>
      </div>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background: ${(props) => (props.isDark ? "#000000" : "#efefef")};
  padding: 20px;

  .logo {
    display: flex;
    align-items: center;

    .logo-text {
      color: #333333;
      font-weight: bold;
      font-size: ${rem(20)};
      margin-left: 20px;
    }
  }
`;
