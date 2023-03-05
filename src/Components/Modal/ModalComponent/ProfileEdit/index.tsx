import { useSelector } from "react-redux";
import {
  ProfileEditCustomAvatar,
  ProfileEditBanner,
  ProfileEditContainer,
  ProfileEditEditButton,
  ProfileEditHeader,
  ProfileEditInput,
  ProfileEditForm,
  ProfileEditFormDiv,
  ProfileEditMenu,
} from "@/Styles/Page/ProfilePage/style";
import { RootStore } from "@/Data/Store";
import { useEffect, useRef, useState } from "react";
import { ImageObj } from "@/Data/Type/Tweet/Tweet";
import { UploadImageRes } from "@/Data/Type/Image/ImageRes";
import { uploadImage } from "@/Service/Image/ImageService";
import { EditUserProfileReq } from "@/Data/Type/User/User";
import { editUserProfileReq } from "@/Service/User/UserService";
import { ProfileEditWrapper } from "@/Styles/components/Modals/style";

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
      .catch(() => {
        alert("유저 프로필 업데이트에 실패했습니다.");
        window.location.reload();
      });
  };

  useEffect(() => {
    setUserNickname(userInfo.userNickname);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ProfileEditWrapper>
      <ProfileEditContainer>
        <form>
          <ProfileEditHeader>
            <h2>Profile</h2>
          </ProfileEditHeader>
          <ProfileEditEditButton onClick={onClickEditProfile} outlined>
            Edit Profile
          </ProfileEditEditButton>
          <ProfileEditBanner
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
              <ProfileEditCustomAvatar
                onClick={(e: any) => {
                  e.stopPropagation();
                  inputProfileRef.current?.click();
                }}
                src={profileImage.src}
                alt=""
              />
            ) : (
              <ProfileEditCustomAvatar
                onClick={(e: any) => {
                  e.stopPropagation();
                  inputProfileRef.current?.click();
                }}
                src={userInfo.profileImage?.imageUrl}
                alt=""
              />
            )}
          </ProfileEditBanner>
          <ProfileEditForm>
            <ProfileEditFormDiv>
              <ProfileEditMenu>닉네임</ProfileEditMenu>
              <ProfileEditInput
                type="text"
                placeholder="Username"
                onChange={onChangeNickname}
                value={userNickname}
              />
            </ProfileEditFormDiv>
          </ProfileEditForm>
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
      </ProfileEditContainer>
    </ProfileEditWrapper>
  );
};

export default ProfileEdit;
