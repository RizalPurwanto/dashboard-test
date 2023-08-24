import interActLogo from "../assets/interActLogo.png";
import homeLogo from "../assets/homeNav.png";
import reportsLogo from "../assets/reportsNav.png";
import settingsLogo from "../assets/settingsNav.png";
import notifLogo from "../assets/notificationNav.png";
import logoutLogo from "../assets/logoutNav.png";
import { styled } from "styled-components";

const VerticalNav = styled.div`
  height: 170vh;
  width: 13vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #171e37;
  z-index: 1;
  position:fixed;
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
export default function Navbar () {
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


    return (
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
    )
}