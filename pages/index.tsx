import Head from "next/head";
import React from "react";
import styled from "styled-components";
import Link from "../src/components/Link";

export default () => (
  <Container>
    <Head>
      <title>Rawpotion | Your Food Needs</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Main>
      <Title>
        Welcome to <Highlight>Rawpotion!</Highlight>
      </Title>
      <Description>
        All your food scheduling needs{" "}
        <Anchor href="/identity/login">Begins Here</Anchor>
      </Description>
    </Main>
  </Container>
);

const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Main = styled.main`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Anchor = styled(Link)`
  ${({ theme }) => `
    color: ${theme.palette.primary.main};
  `};
  text-decoration: none;
  :hover,
  :focus,
  :active {
    text-decoration: underline;
  }
`;

const Highlight = styled.span`
  ${({ theme }) => `
  color: ${theme.palette.primary.main};
  `};
`;

const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
`;

const Description = styled.p`
  line-height: 1.5;
  font-size: 1.5rem;
  text-align: center;
`;
