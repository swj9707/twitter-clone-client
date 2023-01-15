import { Modal, Box } from "@mui/material";

interface DialogProps {
  open: boolean;
  onClose: (value: string) => void;
  children: React.ReactNode;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: " min(601px, 100%)",
  bgcolor: "var(--primary)",
  border: "2px solid #000",
  borderRadius: "15px",
  boxShadow: 24,
  p: 4,
};

const CustomModal = (props: DialogProps) => {
  const { onClose, open, children } = props;

  return (
    <Modal onClose={onClose} open={open}>
      <Box sx={style}>{children}</Box>
    </Modal>
  );
};

export default CustomModal;
