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

import interActLogo from "./assets/interActLogo.png";
import homeLogo from "./assets/homeNav.png";
import reportsLogo from "./assets/reportsNav.png";
import settingsLogo from "./assets/settingsNav.png";
import notifLogo from "./assets/notificationNav.png";
import logoutLogo from "./assets/logoutNav.png";
import userProfile from "./assets/userProfile.png";
import Earnings from "./components/Earnings";

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
const Circle = styled.circle`
  animation-name: ${circleAnimation};
  animation-duration: 8s;
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

const VerticalNav = styled.div`
  height: 120vh;
  width: 13vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #171e37;
  z-index: 1;
`;

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  gap: 5px;
`;

const NavOption = styled.div`
  width: 90%;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 10px;
  align-items: center;
  margin: 0px;
  padding: 10px;
  &:hover {
    background-color: #1f2849;
  }
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
  const [orangeRingOffsetPercentage, setOrangeRingOffsetPercentage] =
    useState(55);
  const [greenRingOffsetPercentage, setGreenRingOffsetPercentage] =
    useState(77);
  const [toggle, setToggle] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [earningsPeriod, setEarningsPeriod] = useState("This week");

  const previousOrangePercentage = useRef(0);
  const previousGreenPercentage = useRef(0);

  let radiusOrange = 40;
  let radiusGreen = 60;
  let radiusSmallCircle = 20;

  let circumferenceSmallCircle = Math.PI * 2 * radiusSmallCircle;
 
 
  const smallCircleOffset = ((100 - 55) / 100) * circumferenceSmallCircle;

  const boxSize = 140;

  useEffect(() => {
    previousGreenPercentage.current = greenRingOffsetPercentage;
    console.log(previousGreenPercentage, "previousGreenPercentage");
  }, [greenRingOffsetPercentage]);

  useEffect(() => {
    previousOrangePercentage.current = orangeRingOffsetPercentage;
    console.log(previousOrangePercentage, "previousOrangePercentage");
  }, [orangeRingOffsetPercentage]);

  



  function changeValue(events) {
    events.preventDefault();
    if (orangeRingOffsetPercentage == 55) {
      setOrangeRingOffsetPercentage(45);
    } else {
      setOrangeRingOffsetPercentage(55);
    }

    if (greenRingOffsetPercentage == 77) {
      setGreenRingOffsetPercentage(50);
    } else {
      setGreenRingOffsetPercentage(77);
    }
  }

  const navArr = [
    {
      name: "Home",
      logo: homeLogo,
    },
    {
      name: "Reports",
      logo: reportsLogo,
    },
    {
      name: "Notification",
      logo: notifLogo,
    },
    {
      name: "Settings",
      logo: settingsLogo,
    },
    {
      name: "Logout",
      logo: logoutLogo,
    },
  ];
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

  const earningsOptions = ["This week", "2 weeks ago", "Last month"];

  return (
    <div className="App">
      <body>
        {/* <div>
        Previous greenRingOffsetPercentage {previousGreenPercentage?.current}
        
       </div>
       <br></br>
       <div>
       Previous orangeRingOffsetPercentage {previousOrangePercentage?.current}
       </div> */}
        <VerticalNav>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              gap: "10px",
              alignItems: "center",
              margin: "20px",
              marginBottom: "70px",
            }}
          >
            <img height={"30px"} width={"30px"} src={interActLogo}></img>
            <div
              style={{
                fontWeight: 700,
                fontSize: "16px",
                color: "white",
              }}
            >
              Inter-act
            </div>
          </div>

          <NavContainer></NavContainer>
          {navArr.map((el) => (
            <NavOption>
              <img height={"16px"} width={"16px"} src={el.logo}></img>
              <div
                style={{
                  fontWeight: 500,
                  fontSize: "16px",
                  color: "#6c747d",
                }}
              >
                {el.name}
              </div>
            </NavOption>
          ))}
        </VerticalNav>
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
              <div>
                <svg
                  style={{
                    transform: "rotate(130deg)",
                  }}
                  width={80}
                  height={80}
                  viewBox={`0 0 60 60`}
                >
                  <circle
                    cx={30}
                    cy={30}
                    r={radiusSmallCircle - 3}
                    fill="#48CAA3"
                    stroke="#0BB885"
                    strokeWidth="3px"
                  ></circle>
                  <circle
                    cx={30}
                    cy={30}
                    r={radiusSmallCircle}
                    fill="transparent"
                    stroke="#0BB885"
                    strokeWidth="3px"
                  ></circle>

                  <circle
                    cx={30}
                    cy={30}
                    r={radiusSmallCircle}
                    fill="transparent"
                    stroke="#FFFFFF"
                    strokeDasharray={circumferenceSmallCircle}
                    strokeDashoffset={smallCircleOffset}
                    strokeWidth="3px"
                    strokeLinecap="round"
                  ></circle>
                </svg>
              </div>

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
         <Earnings></Earnings>
        </DashboardContainer>
      </body>
    </div>
  );
}

export default App;
