import logo from "./logo.svg";
import "./App.css";
import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { keyframes } from "styled-components";

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
  border-radius:10px;
`;

const StatsLabel = styled.div`
  color: #ffffff;
`;

const StatsValue = styled.div`
  color: #6c747d;
`;
const LabelAndValueContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap:3px;
  width:80px;
  
`;

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

  let circumferenceOrange = Math.PI * 2 * radiusOrange;
  let circumferenceGreen = Math.PI * 2 * radiusGreen;

  const orangeRingOffset =
    ((100 - orangeRingOffsetPercentage) / 100) * circumferenceOrange;
  const greenRingOffset =
    ((100 - greenRingOffsetPercentage) / 100) * circumferenceGreen;

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

  return (
    <div className="App">
      <StatsDiv>
        <LabelAndValueContainer>
          <StatsLabel>Total Sales</StatsLabel>
          <StatsValue>$66,503</StatsValue>
        </LabelAndValueContainer>
      </StatsDiv>
      <body>
        {/* <div>
        Previous greenRingOffsetPercentage {previousGreenPercentage?.current}
        
       </div>
       <br></br>
       <div>
       Previous orangeRingOffsetPercentage {previousOrangePercentage?.current}
       </div> */}

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
      </body>
    </div>
  );
}

export default App;
