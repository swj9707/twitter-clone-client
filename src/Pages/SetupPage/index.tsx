import {
  Container,
  Header,
  SetupContainer,
} from "@/Styles/Page/SetupPage/style";

const SetupPage = () => {
  return (
    <Container>
      <Header>
        <h2>Setting</h2>
      </Header>
      <SetupContainer>
        <div>
          <h3>Darkmode</h3>
          <button></button>
          <button></button>
        </div>
      </SetupContainer>
    </Container>
  );
};

export default SetupPage;
