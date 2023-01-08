import { TweetBox, TweetBoxButton, TweetBoxInput } from "@/Styles/TweetStyles";

const Tweetbox = () => {
  return (
    <TweetBox>
      <form>
        <TweetBoxInput>
          <img
            src="https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png"
            alt=""
          />
          <input type="text" placeholder="What's happening?" />
        </TweetBoxInput>
        <TweetBoxButton>Tweet</TweetBoxButton>
      </form>
    </TweetBox>
  );
};

export default Tweetbox;
