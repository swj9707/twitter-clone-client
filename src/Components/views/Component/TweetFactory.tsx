import React, { useState } from "react";
import {
  createTweet,
  uploadTweetImageTest,
} from "../../../Service/Tweet/TweetService";
import { CreateTweet, TweetImageMeta } from "../../../Store/Type/Tweet/Tweet";
import { TwitterUserDTO } from "../../../Store/Type/Auth/Auth";
import { getTweetImageName } from "@/Utils/StringUtils";
import { checkImage } from "@/Utils/FileUtils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const TweetFactory = ({ userObj }: { userObj: TwitterUserDTO | null }) => {
  const [tweet, setTweet] = useState("");
  const [attachment, setAttachment] = useState("");
  const [imageMeta, setImageMeta] = useState<TweetImageMeta>();
  const [imageFile, setImageFile] = useState<Blob>();
  const navigate = useNavigate();

  const onSubmit = async (e: any) => {
    e.preventDefault();
    if (tweet === "") {
      return;
    }
    const tweetObject: CreateTweet = {
      tweetContent: tweet,
      tweetImageMeta: imageMeta !== undefined ? imageMeta : undefined,
    };

    if (imageFile !== undefined) {
      let formData = new FormData();
      formData.append(`ImageFile`, imageFile);
      formData.append(`ImageMeta`, JSON.stringify(imageMeta));
      await uploadTweetImageTest(formData).catch(() => {
        alert("Tweet 생성 시 에러가 발생하였습니다.");
        return false;
      });
    }

    await createTweet(tweetObject)
      .then(() => {
        alert("Tweet이 등록되었습니다.");
        setTweet("");
        navigate("/");
      })
      .catch(() => {
        alert("Tweet 생성 시 에러가 발생하였습니다.");
      });
  };

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    if (target.name === "content") {
      setTweet(target.value);
    }
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
      console.log(tweetImageMetadata);
    }
  };

  const onClearAttachment = () => {
    setAttachment("");
    setImageFile(undefined);
  };

  return (
    <>
      <form onSubmit={onSubmit} className="factoryForm">
        <div className="factoryInput__container">
          <input
            className="factoryInput_input"
            value={tweet}
            onChange={onChange}
            type="text"
            name="content"
            placeholder="What's on your mind?"
            maxLength={120}
          />
          <input type="submit" value="&rarr;" className="factoryInput__arrow" />
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
              style={{
                backgroundImage: attachment,
              }}
              alt="X"
            />
            <div className="factoryForm__clear" onClick={onClearAttachment}>
              <span>Remove</span>
              <FontAwesomeIcon icon={faTimes} />
            </div>
          </div>
        )}
      </form>
    </>
  );
};

export default TweetFactory;
