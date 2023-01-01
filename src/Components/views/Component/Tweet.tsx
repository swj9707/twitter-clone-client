import {
  deleteTweet,
  updateTweet,
  uploadTweetImageTest,
} from "../../../Service/Tweet/TweetService";
import {
  TweetDTO,
  TweetImageMeta,
  UpdateTweet,
} from "../../../Store/Type/Tweet/Tweet";
import { useState } from "react";

import { getTweetImageName } from "@/Utils/StringUtils";
import { checkImage } from "@/Utils/FileUtils";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPencilAlt,
  faPlus,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
const Tweet = ({
  tweetObj,
  isOwner,
}: {
  tweetObj: TweetDTO;
  isOwner: boolean;
}) => {
  const [editing, setEdition] = useState(false);
  const [newTweet, setNewTweet] = useState("");
  const [attachment, setAttachment] = useState("");
  const [imageMeta, setImageMeta] = useState<TweetImageMeta>();
  const [imageFile, setImageFile] = useState<Blob>();
  const navigate = useNavigate();

  const toggleEditing = () => setEdition((prev) => !prev);

  const onChangeNewTweet = (e: any) => {
    const {
      target: { value },
    } = e;
    setNewTweet(value);
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    if (newTweet === "") {
      return;
    }

    const tweetObject: UpdateTweet = {
      tweetId: tweetObj.tweetId,
      tweetContent: newTweet,
      tweetImageMeta: imageMeta !== undefined ? imageMeta : undefined,
    };

    if (imageFile !== undefined) {
      let formData = new FormData();
      formData.append(`ImageFile`, imageFile);
      formData.append(`ImageMeta`, JSON.stringify(imageMeta));
      await uploadTweetImageTest(formData).catch(() => {
        alert("Tweet 수정 시 에러가 발생하였습니다.");
        return false;
      });
    }

    await updateTweet(tweetObject)
      .then(() => {
        alert("Tweet이 수정 되었습니다.");
        window.location.reload();
      })
      .catch((ex) => {
        alert("Tweet을 수정하는 데 실패하였습니다.");
        window.location.reload();
      });
  };

  const onClickDelete = () => {
    deleteTweet({ tweetId: tweetObj.tweetId })
      .then(() => {
        alert("트윗이 삭제되었습니다.");
        window.location.reload();
      })
      .catch((ex) => {
        alert("트윗을 삭제하는 데 실패하였습니다.");
        window.location.reload();
      });
  };

  const onFileChange = (e: any) => {
    const {
      target: { files },
    } = e;
    const theFile: File = files[0];
    const reader = new FileReader();

    const tweetImageMetadata: TweetImageMeta = {
      type: theFile.type,
      name: getTweetImageName(theFile.name),
      size: theFile.size,
    };

    if (checkImage(tweetImageMetadata)) {
      reader.onloadend = () => {
        if (reader.result !== null && typeof reader.result === "string") {
          setAttachment(reader.result);
        }
      };
      setImageMeta(tweetImageMetadata);
      setImageFile(theFile);
      reader.readAsDataURL(theFile);
    }
  };

  const onClearAttachment = () => {
    setAttachment("");
    setImageFile(undefined);
  };

  return (
    <div className="tweet">
      {editing ? (
        <>
          <form onSubmit={onSubmit} className="container tweetEdit">
            <div>
              <input
                type="text"
                placeholder="Edit your tweet"
                value={newTweet}
                required
                onChange={onChangeNewTweet}
              />
            </div>

            <label className="factoryInput__label">
              <span>Add photos</span>
              <FontAwesomeIcon icon={faPlus} />
            </label>
            <input
              id="attach-file"
              type="file"
              accept="image/*"
              onChange={onFileChange}
              style={{
                opacity: 0,
              }}
            />
            {attachment && (
              <div className="factoryForm__attachment">
                <img
                  src={attachment}
                  alt="X"
                  style={{
                    backgroundImage: attachment,
                  }}
                />
                <div className="factoryForm__clear" onClick={onClearAttachment}>
                  <span>Remove</span>
                  <FontAwesomeIcon icon={faTimes} />
                </div>
              </div>
            )}
            <input type="submit" value="UpdateTweet" className="formBtn" />
            <button onClick={toggleEditing} className="formBtn cancelBtn">
              cancel
            </button>
          </form>
        </>
      ) : (
        <>
          <h4>{tweetObj.tweetContent}</h4>
          {tweetObj.tweetImageMeta && (
            <img
              src={tweetObj.tweetImageMeta}
              alt="X"
              width="100"
              height="100"
            />
          )}
          {isOwner && (
            <div className="nweet__actions">
              <span onClick={onClickDelete}>
                <FontAwesomeIcon icon={faTrash} />
              </span>
              <span onClick={toggleEditing}>
                <FontAwesomeIcon icon={faPencilAlt} />
              </span>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Tweet;
