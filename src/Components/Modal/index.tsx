import { Dialog, DialogContent } from "@mui/material";
import Tweetbox from "../Tweetbox";
import { styled } from "@mui/system";

interface DialogProps {
  open: boolean;
  onClose: (value: string) => void;
  children: React.ReactNode;
}

const CustomDialog = styled(DialogContent)({
  width: 598,
  backgroundColor: "#000",
  padding: "10px 20px 10px 20px",
});

const Modal = (props: DialogProps) => {
  const { onClose, open, children } = props;

  return (
    <Dialog onClose={onClose} open={open}>
      <CustomDialog>{children}</CustomDialog>
    </Dialog>
  );
};

export default Modal;
