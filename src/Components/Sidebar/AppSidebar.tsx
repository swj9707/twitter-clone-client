import {
  Avatar,
  Botside,
  Container,
  ExitIcon,
  HomeIcon,
  Logo,
  MenuButton,
  ProfileData,
  ProfileIcon,
  Topside,
  PencilIcon,
  MoreIcon,
} from "./styles";
import Button from "@/Components/button";
import { useNavigate } from "react-router-dom";

const AppSidebar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Topside>
        <Logo />
        <MenuButton
          onClick={() => {
            navigate("/");
          }}
        >
          <HomeIcon />
          <span> Home </span>
        </MenuButton>
        {/* 
        <MenuButton>
          <BellIcon />
          <span> Notification </span>
        </MenuButton> */}

        {/* <MenuButton>
          <EmailIcon />
          <span> Message </span>
        </MenuButton> */}
        <MenuButton onClick={() => navigate("/Profile")}>
          <ProfileIcon />
          <span> Profile </span>
        </MenuButton>
        <MenuButton onClick={() => navigate("/Profile")}>
          <MoreIcon />
          <span> More </span>
        </MenuButton>
        <Button>
          <PencilIcon />
          <span>Tweet</span>
        </Button>
      </Topside>
      <Botside>
        <Avatar />

        <ProfileData>
          <strong>Test User</strong>
          <span>@testuser</span>
        </ProfileData>

        <ExitIcon />
      </Botside>
    </Container>
  );
};

export default AppSidebar;
