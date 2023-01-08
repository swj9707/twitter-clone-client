import styled from "styled-components";

export const TweetBox = styled.div`
  padding-bottom: 10px;
  border-bottom: 8px solid var(--twitter-background);
  padding-right: 10px;
  form {
    display: flex;
    flex-direction: column;
  }
`;

export const TweetBoxInput = styled.div`
  display: flex;
  padding: 20px;
  img {
    border-radius: 50%;
    height: 40px;
  }
  input {
    flex: 1;
    margin-left: 20px;
    font-size: 20px;
    border: none;
    outline: none;
  }
`;

export const TweetBoxButton = styled.button`
  background-color: var(--twitter-color);
  border: none;
  color: white;
  font-weight: 900;

  border-radius: 30px;
  width: 80px;
  height: 40px;
  margin-top: 20px;
  margin-left: auto;
`;

export const PostAvatar = styled.div`
  padding: 20px;
  img {
    border-radius: 50%;
    height: 40px;
  }
`;

export const PostContainer = styled.div`
  display: flex;
  align-items: flex-start;
  border-bottom: 1px solid var(--twitter-background);
  padding-bottom: 10px;
`;

export const PostBody = styled.div`
  flex: 1;
  padding: 10px;
  img {
    width: 450px;
    object-fit: contain;
    border-radius: 20px;
  }
`;

export const PostBadge = styled.div`
  font-size: 14px !important;
  color: var(--twitter-color);
  margin-right: 5px;
`;

export const PostFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export const PostHeaderSpecial = styled.span`
  font-weight: 600;
  font-size: 12px;
  color: gray;
  display: flex;
  margin-left: 5px;
`;

export const PostHeaderText = styled.div`
  h3 {
    font-size: 15px;
    margin-bottom: 5px;
    display: flex;
  }
`;

export const PostHeaderDescription = styled.div`
  margin-bottom: 10px;
  font-size: 15px;
`;
