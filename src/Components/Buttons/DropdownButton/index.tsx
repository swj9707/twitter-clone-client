import { DropdownButtonDiv } from "@/Styles/components/Buttons/style";

interface Prop {
  text: string;
}

const DropdownButton = (prop: Prop) => {
  return <DropdownButtonDiv>{prop.text}</DropdownButtonDiv>;
};

export default DropdownButton;
