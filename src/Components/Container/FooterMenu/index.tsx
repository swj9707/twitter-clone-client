import FloatButton from "../../Buttons/FloatButton";
import CustomModal from "@/Components/Modal";
import { useState } from "react";
import Tweetbox from "../../Tweets/Tweetbox/Main";
import {
  FooterBellIcon,
  FooterContainer,
  FooterEmailIcon,
  FooterHomeIcon,
  FooterSearchIcon,
} from "@/Styles/Page/MainPage/style";

const FooterMenu = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <FooterContainer>
      <FloatButton />
      <FooterHomeIcon />
      <FooterSearchIcon />
      <FooterBellIcon />
      <FooterEmailIcon />
      <CustomModal
        open={open}
        onClose={handleClose}
        children={<Tweetbox isReply={false} />}
      />
    </FooterContainer>
  );
};

export default FooterMenu;
