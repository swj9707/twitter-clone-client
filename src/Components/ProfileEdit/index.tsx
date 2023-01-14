import {
  Avatar,
  Banner,
  Container,
  EditButton,
  Header,
  ProfileData,
} from "./styles";
import { TextField } from "@mui/material";

const ProfileEdit = () => {
  return (
    <Container>
      <Header>
        <h2>Profile</h2>
      </Header>
      <EditButton outlined>Edit Profile</EditButton>
      <Banner>
        <Avatar>
          <img src="https://twitter.clone.swj-dev.p-e.kr/cdn/test/testGif.gif" />
        </Avatar>
      </Banner>

      <ProfileData>
        <div
          style={{
            marginBottom: "10px",
          }}
        >
          <TextField label="Username" color="primary" focused />
        </div>
      </ProfileData>
    </Container>
  );
};

export default ProfileEdit;
