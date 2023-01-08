import styled from "styled-components";

export const ProfileContainer = styled.div`
  --twitter-color: #50b7f5;
  --twitter-background: #e6ecf0;
  display: flex;
  height: 100vh;
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 10px;
`;

export const ProfileContent = styled.div`
  flex: 0.5;
  border-right: 1px solid var(--twitter-background);
  min-height: 1085px;
  max-width: 600px;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  :-webkit-scrollbar {
    display: none;
  }
`;

export const ProfileImagePanel = styled.div`
  cursor: pointer;
  width: 90px;
  height: 90px;
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  position: relative;
  top: -50px;
  border-radius: 100%;
  oveflow: hidden;
  object-fit: fill;
`;

export const ProfileBackgroundPanel = styled.div`
  height: 40vh;
  display: flex;
  img {
    width: 100%;
  }
`;

export const ProfileInfoPanel = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 10px;
  padding-top: 12px;
  padding-left: 16px;
  padding-right: 16px;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserNickname = styled.div`
  margin-top: 10px;
  font-size: 30;
  font-weight: bold;
`;

export const ProfileFollowerContainer = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
`;

export const ProfileButtonPanel = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const ProfileHeader = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  display: flex;
  background-color: white;
  z-index: 100;
  border: 1px solid var(--twitter-background);
  padding: 2px 10px;
  h2 {
    fontsize: 20px;
    fontweight: 800;
  }
`;
