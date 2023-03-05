import { DropdownButtonDiv } from "@/Styles/components/Buttons/style";

interface Prop {
  onClick: () => void;
  text: string;
}

const DropdownButton = (prop: Prop) => {
  return (
    <DropdownButtonDiv onClick={prop.onClick}>{prop.text}</DropdownButtonDiv>
  );
};

export default DropdownButton;
