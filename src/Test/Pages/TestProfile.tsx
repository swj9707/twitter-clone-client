import {
  ProfileContainer,
  ProfileContent,
  ProfileHeader,
  ProfileBackgroundPanel,
  ProfileInfoPanel,
} from "@/Styles/ProfileStyles";
import Sidebar from "../Components/Home/Sidebar";
import Widget from "../Components/Home/Widget";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { BasicButton, OptionButton } from "@/Styles/ButtonStyles";
const TestProfile = () => {
  return (
    <ProfileContainer>
      <Sidebar />
      <ProfileContent>
        <ProfileHeader>
          <FontAwesomeIcon
            icon={faArrowLeft}
            size="2x"
            style={{ marginRight: "10px" }}
          />
          <div
            style={{
              marginLeft: "20px",
            }}
          >
            <h2>Profile(Wassup)</h2>
            <text>0 Tweets</text>
          </div>
        </ProfileHeader>
        <ProfileBackgroundPanel>
          <img
            src="https://res.cloudinary.com/practicaldev/image/fetch/s--7THYTvyf--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/oj0mjcfvpgzkf18w42n8.png"
            alt=""
          />
        </ProfileBackgroundPanel>
        <ProfileInfoPanel>
          <div
            style={{
              justifyContent: "space-between",
              display: "flex",
              flexDirection: "row",
              maxHeight: "100px",
              width: "100%",
            }}
          >
            <div
              style={{
                width: "150px",
                height: "150px",
              }}
            >
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  position: "relative",
                  bottom: "70px",
                }}
                src="https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png"
                alt=""
              />
            </div>
            <div
              style={{
                width: "150px",
              }}
            >
              <BasicButton>EditProfile</BasicButton>
            </div>
          </div>
          <div>
            <div>
              <h2>Profile(Wassup)</h2>
            </div>
            <div>
              <text>@Username</text>
            </div>
          </div>
          <div>
            <div>
              <text>Joined Date</text>
            </div>
          </div>
          <div>
            <text>15 Following </text>
            <text>15 Follower</text>
          </div>
        </ProfileInfoPanel>
        {/* <ProfileButtonPanel>
          <OptionButton>Tweets</OptionButton>
          <OptionButton>Tweets & replies</OptionButton>
          <OptionButton>Likes</OptionButton>
        </ProfileButtonPanel> */}
      </ProfileContent>
      <Widget />
    </ProfileContainer>
  );
};

export default TestProfile;
