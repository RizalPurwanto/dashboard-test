import { styled } from "styled-components";
import { AiOutlineArrowUp } from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import ActivityBullet from "./ActivityBullet";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 390px;
  height: 722px;
  background-color: #1c243f;
  margin-top: 20px;
  margin-left: 20px;
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
  margin-top:10px;

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

const ActivityDate = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: #9f9f9f;
`;

const ActivityText = styled.div`
display: flex;
`;

const activityArr = [
  {
    text: <ActivityText><strong>Nick Mark</strong> Mentioned <strong>Sara Smith</strong> In New Post</ActivityText>,
    date: "11 JUL 8:10 PM",
  },
  {
    text: <ActivityText><strong>The Post Name</strong> was removed by <strong>Nick Mark</strong></ActivityText>,
    date: "11 JUL 9:10 PM",
  },
  {
    text: <ActivityText><strong>Patrick Sulivan</strong> Published a New Post</ActivityText>,
    date: "12 JUL 10:10 PM",
  },
  {
    text: <ActivityText><strong>240+ users</strong> have subscribed to Newsletter #1</ActivityText>,
    date: "18 JUL 19:10 PM",
  },
  {
    text: <ActivityText><strong>The Post Name</strong> was suspended by <strong>Nick Mark</strong></ActivityText>,
    date: "11 JUL 9:10 PM",
  },
];

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

      <ActivityListContainer>
        {activityArr.map((el) => (
              <ActivityItem>
              <ActivityBullet></ActivityBullet>
              <ActivityInfo>
              {el.text}
                <ActivityDate>{el.date}</ActivityDate>
              </ActivityInfo>
            </ActivityItem>
        ))}
       
      </ActivityListContainer>
    </Container>
  );
}
