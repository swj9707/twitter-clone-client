import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Tweet } from "../../..";
import {
  readAllTweets,
  readTweets,
} from "../../../../Service/Tweet/TweetService";
import { RootStore } from "../../../../Store/Data/Store";
import { TweetDTO } from "../../../../Store/Type/Tweet/Tweet";
import TweetFactory from "../../Component/TweetFactory";
import Timeline from "./Timeline";

const Home = () => {
  const user = useSelector((state: RootStore) => state.AuthReducer);
  const [page, setPage] = useState(0);
  const [listInfo, setListInfo] = useState<TweetDTO[]>([]);
  const [limit, setLimit] = useState(10);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    readAllTweets().then((res) => {
      setListInfo([...res.data]);
    });
  }, []);

  return (
    <div>
      <TweetFactory userObj={user.user} />
      <Timeline tweets={listInfo} fetching={false} />
    </div>
  );
};

export default Home;
