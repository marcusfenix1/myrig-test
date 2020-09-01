import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1200px;
  padding-top: 33px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

const Layout = ({ children }) => (
  <Container className="Layout">{children}</Container>
);

export default Layout;
