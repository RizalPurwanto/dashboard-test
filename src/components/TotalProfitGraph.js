import { styled } from "styled-components";

import {
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Chart as ChartJS, defaults } from "chart.js";

import { Bar } from "react-chartjs-2";

import { faker } from "@faker-js/faker";
import { color } from "chart.js/helpers";
import { IconContext } from "react-icons/lib";
import { RiArrowDropDownLine } from "react-icons/ri";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 610px;
  height: 360px;
  background-color: #1c243f;
  margin-top: 20px;
  margin-left: 0;
  border-radius: 20px;
  margin-bottom: 20px;
  gap: 10px;
  padding: 20px;
`;

const ActivityListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  margin-top: 10px;
`;

const GraphTitle = styled.div`
  color: #ffffff;
  font-weight: 700;
  font-size: 18px;
`;

const ActivityStatus = styled.div`
  color: #ffffff;
  font-weight: 400;
  font-size: 16px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const ActivityItem = styled.div`
  width: 80%;
  height: 16%;
  display: flex;
`;

const ActivityInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 120%;
  margin-top: 3px;
  font-size: 14px;
  font-weight: 400;
  color: #ffffff;
  align-items: flex-start;
  padding-left: 8px;
`;

const GraphInfo = styled.div`
  font-size: 13px;
  font-weight: 400;
  color: #9f9f9f;
  display: flex;
  align-items: center;
`;

const GraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 100%;
`;
const GraphInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`;

const TitleAndInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const LabelAndValueContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  width: 100%;
`;

const StatsLabel = styled.div`
  color: #ffffff;
  font-weight: 700;
  font-size: 31px;
`;

const StatsValue = styled.div`
  color: #6c747d;
  font-size: 10px;
  line-height: 14px;
  font-weight: 600;
`;

const Graph = styled.div`
  padding-top: 30px;
  height: 80%;
`;
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);
const earningData = [140, 230, 300, 270, 140, 90, 210, 280, 80];
const expensesData = [-180, -100, -80, -200, -150, -90, -100, -95, -150];

const options = {
  maintainAspectRatio: false,

  plugins: {
    legend: {
      display: false,
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
      grid: {
        display: false,
      },
      ticks: {
        color: "#B9B9C3",
      },
    },
    y: {
      stacked: true,
      grid: {
        display: false,
      },
      max: 300,
      min: -200,
      ticks: {
        color: "#B9B9C3",
        stepSize: 100,
      },
    },
  },
};

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"];

const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map((e, i) => expensesData[i]),
      backgroundColor: "#FF814A",
      borderRadius: {
        // topLeft:10,
        // topRight:10,
        bottomLeft: 10,
        bottomRight: 10,
      },
      barThickness: 18,
      borderSkipped: false,
      borderWidth: 5,
      borderColor: "transparent",
    },
    {
      label: "Dataset 2",
      data: labels.map((e, i) => earningData[i]),
      backgroundColor: "#0BB885",
      borderRadius: {
        topLeft: 10,
        topRight: 10,
        // bottomLeft:10,
        // bottomRight:10,
      },
      barThickness: 18,
      borderSkipped: false,
      borderWidth: 5,
      borderColor: "transparent",
    },
  ],
};

const InnerBalanceContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "60px",
});
const BalanceContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "start",
  alignItems: "center",
  width: "40%",
  height: "100%",
});

const BalanceYear = styled.div({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  width: "71px",
  borderColor: "#0BB885",
  borderStyle: "solid",
  height: "28px",
  borderWidth: "1px",
  color: "#0BB885",
  borderRadius: "7px",
  fontWeight: "600",
  fontSize: "10px",
  marginTop:'10px',
  gap: "3px",
});

const BalanceGraphContainer= styled.div({
  marginTop:'18px'
})

export default function TotalProfitGraph() {
  return (
    <Container>
      <GraphContainer>
        <TitleAndInfoContainer>
          <GraphTitle>Total Profit</GraphTitle>
          <GraphInfoContainer>
            <GraphInfo>
              <svg width={20} height={20} viewBox={`0 0 15 15`}>
                <circle cx={7.5} cy={7.5} r={3} fill="#0BB885"></circle>
              </svg>
              Earning
            </GraphInfo>
            <GraphInfo>
              {" "}
              <svg width={20} height={20} viewBox={`0 0 15 15`}>
                <circle cx={7.5} cy={7.5} r={3} fill="#FF814A"></circle>
              </svg>
              Expense
            </GraphInfo>
          </GraphInfoContainer>
        </TitleAndInfoContainer>
        <Graph>
          <Bar
            style={{
              height: "50%",
            }}
            options={options}
            data={data}
          />
          ;
        </Graph>
      </GraphContainer>
      <BalanceContainer>
        <InnerBalanceContainer>
          <BalanceYear>
            <div>2023</div>
            <div>
              <IconContext.Provider
                value={{
                  color: "#0BB885",
                  className: "dropdown-icon",
                  style: {
                    marginLeft: "1px",
                  },
                }}
              >
                <RiArrowDropDownLine></RiArrowDropDownLine>
              </IconContext.Provider>
            </div>
          </BalanceYear>
          <LabelAndValueContainer>
            <StatsLabel>$842.98</StatsLabel>
            <StatsValue>Latest Month Balance $426.20k</StatsValue>
            <BalanceGraphContainer>
            <svg
              width="147"
              height="46"
              viewBox="0 0 147 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.25171 20.8822C1.25171 20.8822 8.44989 24.4199 11.2846 29.607C14.1193 34.794 17.0251 38.3716 20.2174 31.3185C23.4097 24.2655 25.1717 19.099 25.1717 19.099C25.1717 19.099 29.0775 11.5752 33.7779 18.1279C38.4784 24.6806 41.5108 29.607 41.5108 29.607C41.5108 29.607 46.1705 35.6318 50.6167 31.3185C55.0629 27.0053 57.8904 24.5454 57.8904 24.5454C57.8904 24.5454 62.7026 21.1499 64.7326 26.768C66.7626 32.3861 69.8096 40.4715 69.8096 40.4715C69.8096 40.4715 71.0895 43.0703 72.7441 44.1541C74.3986 45.238 77.4271 44.8842 79.0465 41.1462C80.6659 37.4082 86.1426 19.9018 86.1426 19.9018C86.1426 19.9018 89.6041 10.1228 91.4788 5.62758C93.3535 1.1324 98.4986 -2.4227 102.112 6.60295C105.724 15.6286 106.364 19.099 106.364 19.099C106.364 19.099 107.919 24.3189 112.499 23.7616C117.078 23.2044 117.269 25.6453 118.789 29.1547C120.31 32.6642 124.468 37.2875 124.468 37.2875C124.468 37.2875 127.829 41.3431 133.317 36.0892C138.805 30.8352 142.457 26.9627 146.004 18.6652"
                stroke="#0BB885"
                stroke-width="1.78706"
                stroke-linecap="round"
              />
            </svg>
            </BalanceGraphContainer>
          
          </LabelAndValueContainer>
        </InnerBalanceContainer>
      </BalanceContainer>
    </Container>
  );
}
