
import { styled } from "styled-components";
import OrdersGraph from "./OrdersGraph";


const OrdersLabel = styled.div`
  color: #ffffff;
  font-weight: 500;
  font-size: 16px;
  line-height: 28px;
`;

const OrdersValue = styled.div`
  color: #FF814A;
  font-weight: 500;
  font-size: 29px;
  line-height: 34px;
`;

const OrdersContainer = styled.div`
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
    <OrdersContainer>
      <LabelAndValueContainer>
        <OrdersLabel>Orders</OrdersLabel>
        <OrdersValue>189k</OrdersValue>
        <OrdersGraph></OrdersGraph>
      </LabelAndValueContainer>
    </OrdersContainer>
  );
}
