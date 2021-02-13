import React from "react";
import "antd/dist/antd.css";
import styled, { ThemeProvider } from "styled-components";
import { Alert, Layout, Menu } from "antd";

import { theme } from "@common/style/theme";
import Map from "@common/images/Map";

import RankBox from "./components/RankBox";

const Header = styled.header`
  margin: 0 80px;
  & p {
    padding: 40px 0 0 0;
    display: inline-block;
    font-size: 1.75rem;
    font-weight: 500;
  }

  & span {
    margin: 0 0 0 10px;
  }
`;

const Container = styled.div`
  margin: 0 80px;
`;

const Wrapper = styled(Layout)`
  height: 100vh;
  background: #f3f2f2;

  .ant-menu {
    background: #f3f2f2;
  }
`;

function RankHome() {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Header>
          <p> RANK P</p>
          <span> subtitle </span>
        </Header>
        <Container>
          <Menu theme="light" mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">nav 0</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
          <Alert message="Info Text" type="success" closeText="Close Now" />
          <Map />
          <RankBox />
        </Container>
      </Wrapper>
    </ThemeProvider>
  );
}

export default RankHome;
