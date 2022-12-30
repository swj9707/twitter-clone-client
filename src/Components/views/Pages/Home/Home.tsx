import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import backendConfig from "../../../../Config/api-config";
import { readAllTweets } from "../../../../Service/Tweet/TweetService";
import { RootStore } from "../../../../Store/Data/Store";
import { TweetDTO } from "../../../../Store/Type/Tweet/Tweet";
import TweetFactory from "../../Component/TweetFactory";
import Timeline from "./Timeline";

const Home = () => {
  const user = useSelector((state: RootStore) => state.AuthReducer);
  const [listInfo, setListInfo] = useState<TweetDTO[]>([]);

  useEffect(() => {
    readAllTweets().then((res) => {
      setListInfo([...res.data]);
    });
  }, []);

  return (
    <div className="container">
      <TweetFactory userObj={user.user} />
      <div style={{ marginTop: 30 }}>
        <Timeline tweets={listInfo} fetching={false} />
      </div>
    </div>
  );
};

export default Home;
