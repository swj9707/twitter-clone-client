import FloatButton from "../Buttons/FloatButton";
import { BellIcon, Container, EmailIcon, HomeIcon, SearchIcon } from "./styles";
import CustomModal from "@/Components/Modal";
import { useState } from "react";
import Tweetbox from "../Tweets/Tweetbox/Main";

const FooterMenu = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <FloatButton />
      <HomeIcon />
      <SearchIcon />
      <BellIcon />
      <EmailIcon />
      <CustomModal
        open={open}
        onClose={handleClose}
        children={<Tweetbox isReply={false} />}
      />
    </Container>
  );
};

export default FooterMenu;
