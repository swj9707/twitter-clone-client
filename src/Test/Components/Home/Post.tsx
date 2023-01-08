import {
  PostAvatar,
  PostBadge,
  PostBody,
  PostContainer,
  PostFooter,
  PostHeaderDescription,
  PostHeaderSpecial,
  PostHeaderText,
} from "@/Styles/TweetStyles";
import {
  faRepeat,
  faHeart,
  faArrowUpFromBracket,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Post = () => {
  return (
    <PostContainer>
      <PostAvatar>
        <img
          src="https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png"
          alt=""
        />
      </PostAvatar>
      <PostBody>
        <div>
          <PostHeaderText>
            <h3>
              Somanath Goudar
              <PostHeaderSpecial>
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  style={{
                    fontSize: "14px",
                    color: "#50b7f5",
                    marginRight: "5px",
                  }}
                />
                @somanathg
              </PostHeaderSpecial>
            </h3>
          </PostHeaderText>
          <PostHeaderDescription>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </PostHeaderDescription>
        </div>
        <img
          src="https://www.focus2move.com/wp-content/uploads/2020/01/Tesla-Roadster-2020-1024-03.jpg"
          alt=""
        />
        <PostFooter>
          <FontAwesomeIcon icon={faRepeat} />
          <FontAwesomeIcon icon={faHeart} />
          <FontAwesomeIcon icon={faArrowUpFromBracket} />
        </PostFooter>
      </PostBody>
    </PostContainer>
  );
};

export default Post;
