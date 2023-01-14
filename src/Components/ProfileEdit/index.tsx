import {
  Avatar,
  Banner,
  Container,
  EditButton,
  Header,
  ProfileData,
} from "./styles";

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
          <input type="text" placeholder="Username" />
        </div>
      </ProfileData>
    </Container>
  );
};

export default ProfileEdit;
