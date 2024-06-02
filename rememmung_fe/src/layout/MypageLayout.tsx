import React from "react";
import Header from "./header/header";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

import Background1280 from "@assets/background/background_1280.png";
import Background1440 from "@assets/background/background_1440.png";
import Background1680 from "@assets/background/background_1680.png";
import Background1920 from "@assets/background/background_1920.png";
import MyPageNavBar from "./myPageNavBar/myPageNavBar";

const Background = styled.div`
  @media screen and (max-width: 1280px) {
    background: url(${Background1280});
    background-repeat: no-repeat;
  }
  @media screen and (min-width: 1281px) and (max-width: 1440px) {
    background: url(${Background1440});
    background-repeat: no-repeat;
  }
  @media screen and (min-width: 1441px) and (max-width: 1680px) {
    background: url(${Background1680});
    background-repeat: no-repeat;
  }
  @media screen and (min-width: 1681px) and (max-width: 1920px) {
    background: url(${Background1920});
    background-repeat: no-repeat;
  }
  width: 100vw;
  height: 100vh;
`;

const MyPageContainer = styled.div`
  width: 84%;

  margin: 0 auto;

  display: flex;
  justify-content: space-between;
`;

const MyPageLayout: React.FC = () => {
  return (
    <Background>
      <Header />
      <MyPageContainer>
        <MyPageNavBar />
        <Outlet />
      </MyPageContainer>
    </Background>
  );
};

export default MyPageLayout;
