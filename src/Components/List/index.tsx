import {
  ListContainer,
  ListItem,
  ListTitle,
} from "@/Styles/Page/MainPage/style";
import React from "react";

interface Props {
  title: string;
  elements: React.ReactNode[];
}

const List: React.FC<Props> = ({ title, elements }) => {
  return (
    <ListContainer>
      <ListItem>
        <ListTitle>{title}</ListTitle>
      </ListItem>

      {elements.map((element, index) => (
        <ListItem key={index}>{element}</ListItem>
      ))}
    </ListContainer>
  );
};

export default List;
