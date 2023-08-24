import { useRef, useState } from "react";
import { IconContext } from "react-icons/lib";
import { styled } from "styled-components";
import { RiArrowDropDownLine } from "react-icons/ri";
import ProfitGraph from "./ProfitsGraph";

const ProfitLabel = styled.div`
  color: #ffffff;
  font-weight: 500;
  font-size: 16px;
  line-height: 28px;
`;

const ProfitValue = styled.div`
  color: #0bb885;
  font-weight: 500;
  font-size: 29px;
  line-height: 34px;
`;

const ProfitContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 162px;
  height: 215px;
  background-color: #1c243f;
  margin-top: 20px;
  border-radius: 20px;
  z-index: 0;
`;

const LabelAndValueContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  width: 91px;
  margin-left: 20px;
`;

export default function OrdersCard() {
  return (
    <ProfitContainer>
      <LabelAndValueContainer>
        <ProfitLabel>Profit</ProfitLabel>
        <ProfitValue>8,24k</ProfitValue>
        <ProfitGraph></ProfitGraph>
      </LabelAndValueContainer>
    </ProfitContainer>
  );
}
