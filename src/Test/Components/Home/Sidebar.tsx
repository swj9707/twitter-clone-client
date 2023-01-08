import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faHouse, faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
import {
  IconSpan,
  SidebarContainer,
  SidebarOption,
  SidebarTweet,
} from "@/Styles/HomeStyles";
const Sidebar = () => {
  return (
    <SidebarContainer>
      <IconSpan>
        <FontAwesomeIcon icon={faTwitter} size="2x" color=" #50b7f5" />
      </IconSpan>
      <SidebarOption>
        <IconSpan>
          <FontAwesomeIcon icon={faHouse} />
        </IconSpan>
        <h2>Home</h2>
      </SidebarOption>

      <SidebarOption>
        <IconSpan>
          <FontAwesomeIcon icon={faEnvelope} />
        </IconSpan>
        <h2>Messages</h2>
      </SidebarOption>

      <SidebarOption>
        <IconSpan>
          <FontAwesomeIcon icon={faUser} />
        </IconSpan>
        <h2>Profile</h2>
      </SidebarOption>
      <SidebarTweet>Tweet</SidebarTweet>
    </SidebarContainer>
  );
};
export default Sidebar;
