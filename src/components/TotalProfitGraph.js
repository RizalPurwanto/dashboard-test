import { styled } from "styled-components";
import { AiOutlineArrowUp } from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import ActivityBullet from "./ActivityBullet";

import * as Utils from "../helpers/ChartUtils";
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

const ActivityText = styled.div`
  display: flex;
`;

const GraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  height:100%;
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

const Graph = styled.div`
padding-top:30px;
height:80%;
`;
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  
);
const earningData =[140, 230, 300, 270, 140, 90, 210, 280, 80]
const expensesData= [-180, -100, -80, -200, -150, -90, -100, -95, -150]

const options = {
  maintainAspectRatio:false,

  plugins: {
    legend: {
      display: false
    },
    
  }, 
  responsive: true,
  scales: {
    x: {
      stacked: true,
      grid: {
        display: false
      },
      ticks:{
        color:'#B9B9C3',

      }
    },
    y: {
      stacked: true,
      grid: {
        display: false
      },
      max:300,
      min:-200,
      ticks:{

        color:'#B9B9C3',
        stepSize:100
      }
    },
  },
};

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep"
];

const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map((e, i) =>
        expensesData[i]
      ),
      backgroundColor: "#FF814A",
      borderRadius:{
        // topLeft:10,
        // topRight:10,
        bottomLeft:10,
        bottomRight:10,
      },
      barThickness:18,
      borderSkipped:false,
      borderWidth:5,
      borderColor:'transparent'
    },
    {
      label: "Dataset 2",
      data: labels.map((e, i) =>
        earningData[i]
      ),
      backgroundColor: "#0BB885",
      borderRadius:{
        topLeft:10,
        topRight:10,
        // bottomLeft:10,
        // bottomRight:10,
      },
      barThickness:18,
      borderSkipped:false,
      borderWidth:5,
      borderColor:'transparent'

    },
   
  ],
};
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
          height:'50%'
         }}
          options={options} data={data} />;
        </Graph>
      </GraphContainer>
    </Container>
  );
}
