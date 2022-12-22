import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootStore } from "../../../../Store/Data/Store";
import { TweetDTO } from "../../../../Store/Type/Tweet/Tweet";
import Tweet from "../../Component/Tweet";

const Timeline = ({
  tweets,
  fetching,
}: {
  tweets: TweetDTO[];
  fetching: boolean;
}) => {
  const user = useSelector((state: RootStore) => state.AuthReducer);

  useEffect(() => {}, []);

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight && fetching === false) {
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div>
      {tweets.map((value) =>
        value.userId === user.user?.userId ? (
          <Tweet key={value.tweetId} tweetObj={value} isOwner={true} />
        ) : (
          <Tweet key={value.tweetId} tweetObj={value} isOwner={false} />
        )
      )}
    </div>
  );
};

export default Timeline;
