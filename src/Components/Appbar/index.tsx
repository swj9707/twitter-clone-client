import StickyBox from "react-sticky-box";
import {
  AppbarBody,
  AppbarContainer,
  SearchIcon,
  SearchInput,
  SearchWrapper,
} from "@/Styles/Page/MainPage/style";

import List from "../List";
import FollowSugestion from "./FollowSugestion";
import News from "./News";

const WidgetBar = () => {
  return (
    <AppbarContainer>
      <SearchWrapper>
        <SearchInput placeholder="Search Twitter" />
        <SearchIcon />
      </SearchWrapper>
      <StickyBox>
        <AppbarBody>
          <List
            title="Who to Follow"
            elements={[
              <FollowSugestion name="추후 구현 예정" nickname="@wassup" />,
              <FollowSugestion name="추후 구현 예정" nickname="@wassup" />,
              <FollowSugestion name="추후 구현 예정" nickname="@wassup" />,
            ]}
          />

          <List
            title="Trends for you"
            elements={[<News />, <News />, <News />]}
          />
        </AppbarBody>
      </StickyBox>
    </AppbarContainer>
  );
};

export default WidgetBar;
