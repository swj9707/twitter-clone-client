import { Modal } from "@mui/material";

interface DialogProps {
  open: boolean;
  onClose: (value: string) => void;
  children: React.ReactElement;
}

const CustomModal = (props: DialogProps) => {
  const { onClose, open, children } = props;

  return (
    <Modal onClose={onClose} open={open}>
      <div>{children}</div>
    </Modal>
  );
};

export default CustomModal;
