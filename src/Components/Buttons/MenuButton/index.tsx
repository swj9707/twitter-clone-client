import { Link } from "react-router-dom";

interface props {
  url: string;
}

const MenuButton = (prop: props) => {
  const { url } = prop;
  return <Link to={url} style={{}}></Link>;
};
