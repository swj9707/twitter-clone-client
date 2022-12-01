import { Tweet } from "../Components";

const Home = () => {
  return (
    <div>
      <form>
        <input type="text" placeholder="what's on your mind" maxLength={120} />
        <input type="submit" value="tweet" />
      </form>
      <div>
        <Tweet />
        <Tweet />
        <Tweet />
      </div>
    </div>
  );
};

export default Home;
