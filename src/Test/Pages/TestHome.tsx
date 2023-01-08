import Sidebar from "../Components/Home/Sidebar";
import Tweetbox from "../Components/Home/Tweetbox";
import Post from "../Components/Home/Post";
import Widget from "../Components/Home/Widget";
import { Feed, FeedHeader } from "@/Styles/HomeStyles";

const TestHome = () => {
  return (
    <>
      <Feed>
        <FeedHeader>
          <h2>Home</h2>
        </FeedHeader>
        <Tweetbox />
        <Post />
        <Post />
        <Post />
        <Post />
      </Feed>
    </>
  );
};
export default TestHome;
