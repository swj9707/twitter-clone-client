import Tweetbox from "@/Components/Tweets/Tweetbox/Main";

const AddTweetModal = () => {
  return (
    <div className="outline-none absolute border top-1/4 left-1/2 lg:left-1/2 transform -translate-x-1/2 -translate-y-1/4 origin-center w-2/3 lg:w-1/2 h-auto pt-2 pb-3 rounded-2xl flex flex-col justify-start items-start">
      <Tweetbox isReply={false} />
    </div>
  );
};

export default AddTweetModal;
