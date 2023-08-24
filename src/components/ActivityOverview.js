import { styled } from "styled-components";
import { AiOutlineArrowUp } from "react-icons/ai";
import { IconContext } from "react-icons/lib";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 430px;
  height: 722px;
  background-color: #1c243f;
  margin-top: 20px;
  margin-left:20px;
  border-radius: 20px;
  margin-bottom:20px;
`;

const ActivityListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const ActivityTitle = styled.div`
  color: #ffffff;
  font-weight: 700;
  font-size: 20px;
`;

const ActivityStatus = styled.div`
  color: #ffffff;
  font-weight: 400;
  font-size: 16px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export default function ActivityOverview() {
  return (
    <Container>
      <ActivityTitle>Activity overview</ActivityTitle>
      <ActivityStatus>
        <IconContext.Provider
          value={{
            color: "#0BB885",
            style: {
              width: "24px",
              height: "24px",
              marginTop: "0px",
            },
          }}
        >
          <AiOutlineArrowUp></AiOutlineArrowUp>
        </IconContext.Provider>
        <div>16% this month</div>
      </ActivityStatus>

      <ActivityListContainer></ActivityListContainer>
    </Container>
  );
}
