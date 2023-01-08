import {
  Avatar,
  BellIcon,
  Botside,
  Container,
  EmailIcon,
  ExitIcon,
  FavoriteIcon,
  HomeIcon,
  Logo,
  MenuButton,
  ProfileData,
  ProfileIcon,
  Topside,
} from "./styles";
import Button from "@/Test/Components/button";

const AppSidebar: React.FC = () => {
  return (
    <Container>
      <Topside>
        <Logo />
        <MenuButton>
          <HomeIcon />
          <span> Home </span>
        </MenuButton>

        <MenuButton>
          <BellIcon />
          <span> Notification </span>
        </MenuButton>

        <MenuButton>
          <EmailIcon />
          <span> Message </span>
        </MenuButton>

        <MenuButton className="active">
          <ProfileIcon />
          <span> Profile </span>
        </MenuButton>

        <Button>
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
