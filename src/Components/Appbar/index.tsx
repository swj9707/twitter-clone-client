import StickyBox from "react-sticky-box";
import {
  Body,
  Container,
  SearchIcon,
  SearchInput,
  SearchWrapper,
} from "./styles";

import List from "../List";
import FollowSugestion from "./FollowSugestion";
import News from "./News";

const WidgetBar = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Search Twitter" />
        <SearchIcon />
      </SearchWrapper>
      <StickyBox>
        <Body>
          <List
            title="Who to Follow"
            elements={[
              <FollowSugestion name="Wassup" nickname="@wassup" />,
              <FollowSugestion name="Wassup" nickname="@wassup" />,
              <FollowSugestion name="Wassup" nickname="@wassup" />,
            ]}
          />

          <List
            title="Trends for you"
            elements={[<News />, <News />, <News />]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default WidgetBar;
