import React from "react";
import { Follower } from "../../..";

const FollowerPage = () => {
  return (
    <>
      <div>
        <button>Follower</button>
        <button>Following</button>
      </div>
      <div>
        <Follower />
        <Follower />
        <Follower />
      </div>
    </>
  );
};

export default FollowerPage;
