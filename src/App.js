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
import interActLogo from "./assets/interActLogo.png"

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
  font-weight:700;
`;

const StatsValue = styled.div`
  color: #6c747d;
  font-size: 14px;
  font-weight:600;
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
  height:120vh;
  width:13vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color:#171E37;
  
`

const DashboardContainer = styled.div`
  height:100%;
  
  width:80vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top:60px
`

function App() {
  const [orangeRingOffsetPercentage, setOrangeRingOffsetPercentage] =
    useState(55);
  const [greenRingOffsetPercentage, setGreenRingOffsetPercentage] =
    useState(77);
  const [toggle, setToggle] = useState(false);

  const previousOrangePercentage = useRef(0);
  const previousGreenPercentage = useRef(0);

  let radiusOrange = 70;
  let radiusGreen = 100;
  let radiusSmallCircle = 20;

  let circumferenceSmallCircle = Math.PI * 2 * radiusSmallCircle
  let circumferenceOrange = Math.PI * 2 * radiusOrange;
  let circumferenceGreen = Math.PI * 2 * radiusGreen;

  const orangeRingOffset =
    ((100 - orangeRingOffsetPercentage) / 100) * circumferenceOrange;
  const greenRingOffset =
    ((100 - greenRingOffsetPercentage) / 100) * circumferenceGreen;

  const smallCircleOffset =  ((100 - 55) / 100) * circumferenceSmallCircle;

  const boxSize = 600;

  useEffect(() => {
    previousGreenPercentage.current = greenRingOffsetPercentage;
    console.log(previousGreenPercentage, "previousGreenPercentage");
  }, [greenRingOffsetPercentage]);

  useEffect(() => {
    previousOrangePercentage.current = orangeRingOffsetPercentage;
    console.log(previousOrangePercentage, "previousOrangePercentage");
  }, [orangeRingOffsetPercentage]);

  const animatedStyle = useSpring({
    strokeDasharray:
      ((100 - greenRingOffsetPercentage) / 100) * circumferenceGreen,
    strokeDashoffset: toggle
      ? 0
      : ((100 - greenRingOffsetPercentage) / 100) * circumferenceGreen,
  });

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
        {/* <div>
        Previous greenRingOffsetPercentage {previousGreenPercentage?.current}
        
       </div>
       <br></br>
       <div>
       Previous orangeRingOffsetPercentage {previousOrangePercentage?.current}
       </div> */}
       <VerticalNav>
          <div style={{
            display:'flex',
            flexDirection:'row',
            justifyContent:'flex-start',
            gap:'10px',
            alignItems:'center',
            margin:'20px'
          }}>
            <img height={'30px'} width={'30px'} src={interActLogo}></img>
            <div style={{
              fontWeight:700,
              fontSize:'16px',
              color:'white'
            }}>Inter-act</div>
          </div>
       </VerticalNav>
       <DashboardContainer>
       <StatsContainer>
      <StatsDiv style={{ backgroundColor:'#0BB885',}}>
      <div >
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
              r={radiusSmallCircle-3}
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
              <StatsValue style={{color:'white', fontWeight:'700'}}>$31.868</StatsValue>
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
        <div onClick={(e) => changeValue(e)}>
          <svg
            style={{
              transform: "rotate(-90deg)",
            }}
            width={boxSize}
            height={boxSize}
            viewBox={`0 0 ${boxSize} ${boxSize}`}
          >
            <circle
              cx={boxSize / 2}
              cy={150}
              r={radiusGreen}
              fill="transparent"
              stroke="#1F2849"
              strokeWidth="20px"
            ></circle>
            <Circle
              cx={boxSize / 2}
              cy={150}
              r={radiusGreen}
              fill="transparent"
              stroke="#0BB885"
              strokeDasharray={circumferenceGreen}
              style={{
                borderRadius: "10px",
              }}
              strokeDashoffset={greenRingOffset}
              strokeWidth="20px"
              strokeLinecap="round"
            ></Circle>
            <circle
              cx={boxSize / 2}
              cy={150}
              r={radiusOrange}
              fill="transparent"
              stroke="#1F2849"
              strokeWidth="20px"
            ></circle>
            <circle
              cx={boxSize / 2}
              cy={150}
              r={radiusOrange}
              fill="transparent"
              stroke="#FF814A"
              strokeDasharray={circumferenceOrange}
              style={{
                borderRadius: "10px",
              }}
              strokeDashoffset={orangeRingOffset}
              strokeWidth="20px"
              strokeLinecap="round"
            ></circle>
          </svg>
        </div>
       </DashboardContainer>

      </body>
    </div>
  );
}

export default App;
