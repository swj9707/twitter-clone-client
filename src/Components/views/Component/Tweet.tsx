import { deleteTweet, updateTweet } from "../../../Service/Tweet/TweetService";
import { TweetDTO } from "../../../Store/Type/Tweet/Tweet";
import { useState } from "react";

const Tweet = ({
  tweetObj,
  isOwner,
}: {
  tweetObj: TweetDTO;
  isOwner: boolean;
}) => {
  const [editing, setEdition] = useState(false);
  const [newTweet, setNewTweet] = useState("");

  const toggleEditing = () => setEdition((prev) => !prev);

  const onChangeNewTweet = (e: any) => {
    const {
      target: { value },
    } = e;
    setNewTweet(value);
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    updateTweet({
      tweetId: tweetObj.tweetId,
      tweetContent: newTweet,
      tweetImageMeta: "",
    })
      .then(() => {
        alert("수정 되었습니다.");
        window.location.replace("/");
      })
      .catch((ex) => {
        alert("수정하는 데 실패하였습니다.");
        console.log(ex);
        window.location.replace("/");
      });
  };

  const onClickDelete = () => {
    deleteTweet({ tweetId: tweetObj.tweetId })
      .then(() => {
        alert("트윗이 삭제되었습니다.");
        window.location.replace("/");
      })
      .catch((ex) => {
        alert("트윗을 삭제하는 데 실패하였습니다.");
        console.log(ex);
        window.location.replace("/");
      });
  };

  return (
    <div>
      {editing ? (
        <>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Edit your tweet"
              value={newTweet}
              required
              onChange={onChangeNewTweet}
            />
            <input type="submit" value="UpdateTweet" />
          </form>
          <button onClick={toggleEditing}>cancel</button>
        </>
      ) : (
        <>
          <h4>{tweetObj.tweetContent}</h4>
          {isOwner && (
            <div>
              <button onClick={onClickDelete}>Delete Tweet</button>
              <button onClick={toggleEditing}>Edit Tweet</button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Tweet;
