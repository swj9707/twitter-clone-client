import { useEffect } from "react";
import { BackCircle, FrontCircle, Loading, SpinnerContainer } from "./style";

const Spinner = () => {
  useEffect(() => {
    console.log("Wassup");
  }, []);

  return (
    <Loading>
      <SpinnerContainer>
        <svg viewBox="0 0 32 32">
          <BackCircle cx="16" cy="16" fill="none" r="14" />
          <FrontCircle cx="16" cy="16" fill="none" r="14" />
        </svg>
      </SpinnerContainer>
    </Loading>
  );
};

export default Spinner;
