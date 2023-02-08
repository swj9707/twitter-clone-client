import { useSelector } from "react-redux";
import {
  CustomAvatar,
  Banner,
  Container,
  EditButton,
  Header,
  ProfileData,
} from "./styles";
import { RootStore } from "@/Data/Store";
import { useCallback, useEffect, useRef, useState } from "react";
import { ImageObj } from "@/Data/Type/Tweet/Tweet";
import { ImageInfo } from "@/Data/Type/Image/Image";
import { UploadImageRes } from "@/Data/Type/Image/ImageRes";
import { uploadImage } from "@/Service/Image/ImageService";
import { EditUserProfileReq } from "@/Data/Type/User/User";
import { editUserProfileReq } from "@/Service/User/UserService";
import { Windows } from "styled-icons/boxicons-logos";

const ProfileEdit = () => {
  const userInfo = useSelector((state: RootStore) => state.UserInfoReducer);
  const userAuthInfo = useSelector((state: RootStore) => state.AuthReducer);

  const inputBackgroundRef = useRef<HTMLInputElement>(null);
  const inputProfileRef = useRef<HTMLInputElement>(null);
  const [profileImage, setProfileImage] = useState<ImageObj>();
  const [backgroundImage, setBackgroundImage] = useState<ImageObj>();
  const [userNickname, setUserNickname] = useState<string>("");

  const onChangeNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserNickname(e.target.value);
  };

  const onBannerImageChange = (event: any) => {
    if (event.target) {
      const target = event.target as HTMLInputElement;
      console.log(target.id);
      const file = target.files?.[0];
      if (file) {
        const fileObj = new Blob([file]);
        setBackgroundImage({
          src: URL.createObjectURL(fileObj),
          file: file,
        });
      }
    }
  };

  const onProfileImageChange = (event: any) => {
    if (event.target) {
      const target = event.target as HTMLInputElement;
      console.log(target.id);
      const file = target.files?.[0];
      if (file) {
        const fileObj = new Blob([file]);
        setProfileImage({
          src: URL.createObjectURL(fileObj),
          file: file,
        });
      }
    }
  };

  const onClickEditProfile = async () => {
    let request: EditUserProfileReq = {
      userId: userAuthInfo.user.userId,
      newUserNickname: userNickname,
      profileImage: userInfo.profileImage,
      backgroundImage: userInfo.backgroundImage,
    };

    if (profileImage !== undefined) {
      const file = profileImage.file;
      const res: UploadImageRes = await uploadImage(file);
      request.profileImage = res.data;
    }

    if (backgroundImage !== undefined) {
      const file = backgroundImage.file;
      const res: UploadImageRes = await uploadImage(file);
      request.backgroundImage = res.data;
    }

    editUserProfileReq(request)
      .then(() => {
        alert("유저 프로필이 업데이트 되었습니다.");
        window.location.reload();
      })
      .catch((ex) => {
        console.log(ex);
        alert("유저 프로필 업데이트에 실패했습니다.");
        window.location.reload();
      });
  };

  useEffect(() => {
    setUserNickname(userInfo.userNickname);
  }, []);

  return (
    <Container>
      <form>
        <Header>
          <h2>Profile</h2>
        </Header>
        <EditButton onClick={onClickEditProfile} outlined>
          Edit Profile
        </EditButton>
        <Banner
          onClick={() => {
            inputBackgroundRef.current?.click();
          }}
        >
          {backgroundImage !== undefined ? (
            <img src={backgroundImage.src} alt="" />
          ) : (
            <img src={userInfo.backgroundImage?.imageUrl} alt="" />
          )}

          {profileImage !== undefined ? (
            <CustomAvatar
              onClick={(e) => {
                e.stopPropagation();
                inputProfileRef.current?.click();
              }}
              src={profileImage.src}
              alt=""
            />
          ) : (
            <CustomAvatar
              onClick={(e) => {
                e.stopPropagation();
                inputProfileRef.current?.click();
              }}
              src={userInfo.profileImage?.imageUrl}
              alt=""
            />
          )}
        </Banner>
        <ProfileData>
          <div
            style={{
              marginBottom: "10px",
            }}
          >
            <input
              type="text"
              placeholder="Username"
              onChange={onChangeNickname}
              value={userNickname}
            />
          </div>
        </ProfileData>
        <input
          ref={inputBackgroundRef}
          type="file"
          accept="image/*"
          id="upload-BannerImage"
          onChange={onBannerImageChange}
          hidden
        />
        <input
          ref={inputProfileRef}
          type="file"
          accept="image/*"
          id="upload-ProfileImage"
          onChange={onProfileImageChange}
          hidden
        />
      </form>
    </Container>
  );
};

export default ProfileEdit;
