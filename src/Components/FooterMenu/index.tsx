import FloatButton from "../FloatButton";
import { BellIcon, Container, EmailIcon, HomeIcon, SearchIcon } from "./styles";
import Modal from "@/Components/Modal";
import { useState } from "react";
import Tweetbox from "../Tweetbox";

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
      <Modal open={open} onClose={handleClose} children={<Tweetbox />} />
    </Container>
  );
};

export default FooterMenu;
