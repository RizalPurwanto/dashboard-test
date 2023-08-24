import logo from "./logo.svg";
import "./App.css";
import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { keyframes } from "styled-components";
import { IoMdTrophy } from "react-icons/io";
import { IconContext } from "react-icons/lib";
import { BsFillCalendarFill } from "react-icons/bs";
import { BiSolidWallet } from "react-icons/bi";
import { HiChartPie } from "react-icons/hi";

import userProfile from "./assets/userProfile.png";
import Earnings from "./components/Earnings";
import Navbar from "./components/Navbar";
import TotalCostIcon from "./components/TotalCostIcon";
import ProfitCard from "./components/ProfitCard";
import OrdersCard from "./components/OrdersCard";
import ActivityOverview from "./components/ActivityOverview";

const Container = styled.div`
  width: 300px;
  height: 300px;
`;
const PercentRing = styled.svg`
  height: 300px;
  width: 300px;
`;

const circleAnimation = keyframes`
0% {stroke-dashoffset: 1000; }
100% { stroke-dashoffset: 0; }
`;

const TotalCostDiv = styled.div`
  background-color: #0bb885;
  width: 205px;
  height: 100px;
`;

const StatsDiv = styled.div`
  background-color: #1c243f;
  width: 205px;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  gap: 15px;
`;

const StatsLabel = styled.div`
  color: #ffffff;
  font-weight: 700;
`;

const StatsValue = styled.div`
  color: #6c747d;
  font-size: 14px;
  font-weight: 600;
`;
const LabelAndValueContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 3px;
  width: 91px;
`;

const StatsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
`;

const DashboardContainer = styled.div`
  height: 100%;

  width: 80vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 0px;
`;

const UserInfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  color: white;

  margin-bottom: -10px;
`;

const UserInfo = styled.div`
  width: 126px;
  width: 36px;
`;

const HeaderDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const HeaderTitle = styled.div`
  color: white;
  font-size: 30px;
  font-weight: 600;
  margin-top: 20px;
`;
const CurrentRoute = styled.div`
  color: #0bb885;
`;
const PageRoute = styled.div`
  font-weight: 500;
  font-size: 14px;
  color: #6c747d;
  margin-top: 0px;
  margin-bottom: 20px;
  display: flex;
`;

const HeaderLine = styled.hr({
  backgroundColor: "white",
  width: "109%",
  marginLeft: "-30px",
  marginBottom: "20px",
  zIndex: 0,
});

function App() {
  const [toggle, setToggle] = useState(false);
  let radiusSmallCircle = 20;
  let circumferenceSmallCircle = Math.PI * 2 * radiusSmallCircle;
  const smallCircleOffset = ((100 - 55) / 100) * circumferenceSmallCircle;
  const statsArr = [
    {
      label: "Total Sales",
      value: "$66,503",
      icon: <IoMdTrophy></IoMdTrophy>,
      isTotal: false,
    },
    {
      label: "This Week",
      value: "$35,000.00",
      icon: <BsFillCalendarFill></BsFillCalendarFill>,
      isTotal: false,
    },
    {
      label: "Revenue",
      value: "$63,00K",
      icon: <HiChartPie></HiChartPie>,
      isTotal: false,
    },
    {
      label: "$1250",
      value: "Last Payment",
      icon: <BiSolidWallet></BiSolidWallet>,
      isTotal: false,
    },
  ];

  return (
    <div className="App">
      <body>
        <Navbar></Navbar>
       <div style={{
        display:'flex',
        flexDirection:'row',
        width:'95vw',
        justifyContent:'flex-end',
        
       }}>
       <DashboardContainer>
          <UserInfoContainer>
            <img
              style={{
                marginTop: "10px",
              }}
              src={userProfile}
            ></img>{" "}
            <div>Hello, User!</div>
          </UserInfoContainer>

          <HeaderLine></HeaderLine>
          <HeaderDiv>
            <HeaderTitle>Marketing Dashboard</HeaderTitle>
            <PageRoute>
              Home /<CurrentRoute>Dashboard</CurrentRoute>
            </PageRoute>
          </HeaderDiv>
          <StatsContainer>
            <StatsDiv style={{ backgroundColor: "#0BB885" }}>
              <TotalCostIcon></TotalCostIcon>

              <LabelAndValueContainer>
                <StatsLabel>Total Cost</StatsLabel>
                <StatsValue style={{ color: "white", fontWeight: "700" }}>
                  $31.868
                </StatsValue>
              </LabelAndValueContainer>
            </StatsDiv>
            {statsArr.map((el) => (
              <StatsDiv>
                <IconContext.Provider
                  value={{ color: "#0BB885", className: "stats-icon" }}
                >
                  {el.icon}
                </IconContext.Provider>

                <LabelAndValueContainer>
                  <StatsLabel>{el.label}</StatsLabel>
                  <StatsValue>{el.value}</StatsValue>
                </LabelAndValueContainer>
              </StatsDiv>
            ))}
          </StatsContainer>
          <div
            className="innerDashboardContainer"
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div
              className="rightInnerDashboardContainer"
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                className="upperContainer"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "20px",
                }}
              >
                <Earnings></Earnings>
               
                <OrdersCard></OrdersCard>
                <ProfitCard></ProfitCard>
              </div>
              <div className="lowerContainer"></div>
            </div>
            <div className="activityContainer">
            <ActivityOverview></ActivityOverview>
            </div>
          </div>
        </DashboardContainer>
       </div>
      </body>
    </div>
  );
}

export default App;
