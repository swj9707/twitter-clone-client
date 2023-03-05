import {
  BackCircle,
  FrontCircle,
  SpinnerLoading,
  SpinnerContainer,
} from "@/Styles/Page/MainPage/style";

const Spinner = () => {
  return (
    <SpinnerLoading>
      <SpinnerContainer>
        <svg viewBox="0 0 32 32">
          <BackCircle cx="16" cy="16" fill="none" r="14" />
          <FrontCircle cx="16" cy="16" fill="none" r="14" />
        </svg>
      </SpinnerContainer>
    </SpinnerLoading>
  );
};

export default Spinner;
