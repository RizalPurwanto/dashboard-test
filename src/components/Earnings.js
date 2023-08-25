import { useEffect, useRef, useState } from "react";
import { IconContext } from "react-icons/lib";
import { styled } from "styled-components";
import { RiArrowDropDownLine } from "react-icons/ri";


const EarningStatsLabel = styled.div`
  color: #ffffff;
  font-weight: 400;
  font-size: 12px;
`;

const EarningStatsValue = styled.div`
  color: #8a92a6;
  font-weight: 500;
  font-size: 14px;
`;

const EarningsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 285px;
  height: 219px;
  background-color: #1c243f;
  margin-top: 20px;
  border-radius: 20px;
  z-index: 0;
`;

const EarningsTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  color: white;
  height: 30px;
  font-weight: 700;
  width: 100%;
  gap: 100px;
  padding-left: 40px;
  padding-top: 20px;
  margin-bottom: 18px;
`;

const EarningsContents = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  gap: 20px;
  padding-left: 10px;
  z-index: -99;
`;

const EarningsDropdownButton = styled.div({
  color: "#5C6CA5",
  fontWeight: 400,
  fontSize: "12px",
  marginTop: "2px",
  marginBottom: "10px",
});

const EarningsDropdownListContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  borderRadius: "8px",

  overflow: "clip",
});

const EarningsDropdownOption = styled.div`
  background-color: #2e4b85;
  color: white;
  font-weight: 500;
  font-size: 14px;
  width: 129px;
  height: 32px;
  padding-left: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding-bottom: -5px;
  z-index: 9;
  &:hover {
    background-color: #4f6898;
  }
`;

const LabelAndValueContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 3px;
  width: 91px;
`;

export default function Earnings() {
  const [orangeRingOffsetPercentage, setOrangeRingOffsetPercentage] =
    useState(55);
  const [greenRingOffsetPercentage, setGreenRingOffsetPercentage] =
    useState(77);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [earningsPeriod, setEarningsPeriod] = useState("This week");


  const previousOrangePercentage = useRef(0);
  const previousGreenPercentage = useRef(0);


  useEffect(() => {
    previousGreenPercentage.current = greenRingOffsetPercentage;
    console.log(previousGreenPercentage, "previousGreenPercentage");
  }, [greenRingOffsetPercentage]);

  useEffect(() => {
    previousOrangePercentage.current = orangeRingOffsetPercentage;
    console.log(previousOrangePercentage, "previousOrangePercentage");
  }, [orangeRingOffsetPercentage]);

  let radiusOrange = 40;
  let radiusGreen = 60;

  let circumferenceOrange = Math.PI * 2 * radiusOrange;
  let circumferenceGreen = Math.PI * 2 * radiusGreen;

  const orangeRingOffset =
    ((100 - orangeRingOffsetPercentage) / 100) * circumferenceOrange;
  const greenRingOffset =
    ((100 - greenRingOffsetPercentage) / 100) * circumferenceGreen;

  const boxSize = 140;

  const earningsDropdownRef = useRef(null);
  const dropdownButtonRef = useRef(null)

  function closeDropdown(e) {
    if (
      earningsDropdownRef.current &&
      isDropdownOpen &&
    (  !earningsDropdownRef.current.contains(e.target) && !dropdownButtonRef.current.contains(e.target))
    ) {
      setIsDropdownOpen(false);
    }
  }

  document.addEventListener("mousedown", closeDropdown);

  function handleChangeEarningPeriod(event, period) {
    event.preventDefault();
    
    if (period == "This week") {
      setEarningsPeriod(period);
      setGreenRingOffsetPercentage(77);
      setOrangeRingOffsetPercentage(55);
      setIsDropdownOpen(false);
    }

    if (period == "2 weeks ago") {
      setEarningsPeriod(period);
      setGreenRingOffsetPercentage(50);
      setOrangeRingOffsetPercentage(45);
      setIsDropdownOpen(false);
    }

    if (period == "Last month") {
      setIsDropdownOpen(false);
    }
  }

  function toggleDropdown(event) {
    event.preventDefault();
    setIsDropdownOpen(!isDropdownOpen);
  }

  const earningsOptions = ["This week", "2 weeks ago", "Last month"];

  return(
    <EarningsContainer>
    <EarningsTitle>
      <div>Earnings</div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        <a
          style={{
            textDecoration: "none",
          }}
          href="#"
        >
          <EarningsDropdownButton ref={dropdownButtonRef} onClick={(e) => toggleDropdown(e)}>
            {earningsPeriod}{" "}
            <IconContext.Provider
              value={{ color: "#5C6CA5", className: "dropdown-icon" }}
            >
              <RiArrowDropDownLine></RiArrowDropDownLine>
            </IconContext.Provider>
          </EarningsDropdownButton>
        </a>

        {isDropdownOpen && (
          <EarningsDropdownListContainer ref={earningsDropdownRef}>
            {/* <EarningsDropdownOption><div>This week</div></EarningsDropdownOption> */}
            {earningsOptions.map((el) => (
              <a
                style={{
                  textDecoration: "none",
                }}
                href="#"
              >
                <EarningsDropdownOption
                  onClick={(e) => handleChangeEarningPeriod(e, el)}
                >
                  <div>{el}</div>
                </EarningsDropdownOption>
              </a>
            ))}
          </EarningsDropdownListContainer>
        )}
      </div>
    </EarningsTitle>
    <EarningsContents>
      <div>
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
            cy={boxSize / 2}
            r={radiusGreen}
            fill="transparent"
            stroke="#1F2849"
            strokeWidth="15px"
          ></circle>
          <circle
            cx={boxSize / 2}
            cy={boxSize / 2}
            r={radiusGreen}
            fill="transparent"
            stroke="#0BB885"
            strokeDasharray={circumferenceGreen}
            style={{
              borderRadius: "12px",
            }}
            strokeDashoffset={greenRingOffset}
            strokeWidth="12px"
            strokeLinecap="round"
          ></circle>
          <circle
            cx={boxSize / 2}
            cy={boxSize / 2}
            r={radiusOrange}
            fill="transparent"
            stroke="#1F2849"
            strokeWidth="12px"
          ></circle>
          <circle
            cx={boxSize / 2}
            cy={boxSize / 2}
            r={radiusOrange}
            fill="transparent"
            stroke="#FF814A"
            strokeDasharray={circumferenceOrange}
            style={{
              borderRadius: "10px",
            }}
            strokeDashoffset={orangeRingOffset}
            strokeWidth="12px"
            strokeLinecap="round"
          ></circle>
        </svg>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <svg width={20} height={20} viewBox={`0 0 15 15`}>
            <circle cx={7.5} cy={7.5} r={3} fill="#0BB885"></circle>
          </svg>

          <LabelAndValueContainer>
            <EarningStatsLabel>Total Sales</EarningStatsLabel>
            <EarningStatsValue>{earningsPeriod == "This week" ? "251k" : "165k"}</EarningStatsValue>
          </LabelAndValueContainer>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <svg width={20} height={20} viewBox={`0 0 15 15`}>
            <circle cx={7.5} cy={7.5} r={3} fill="#FF814A"></circle>
          </svg>

          <LabelAndValueContainer>
            <EarningStatsLabel>Total Orders</EarningStatsLabel>
            <EarningStatsValue>{earningsPeriod == "This week" ? "176k" : "147k"}</EarningStatsValue>
          </LabelAndValueContainer>
        </div>
      </div>
    </EarningsContents>
  </EarningsContainer>
  )
}
