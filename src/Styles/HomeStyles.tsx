import styled from "styled-components";

// Home
export const HomeContainer = styled.div`
  display: flex;
  height: 100vh;
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 10px;
`;

//Sidebar

export const SidebarContainer = styled.div`
  border-right: 1px solid var(--twitter-background);
  flex: 0.2;
  min-width: 250px;
  margin-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const SidebarOption = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  h2 {
    font-weight: 800;
    font-size: 20px;
    margin-right: 20px;
  }
  :hover {
    background-color: var(--twitter-background);
    border-radius: 30px;
    color: var(--twitter-color);
    transition: color 100ms ease-out;
  }
  .active {
    color: var(--twitter-color);
  }
`;

export const SidebarTweet = styled.button`
  width: 100%;
  background-color: var(--twitter-color);
  border: none;
  color: white;
  font-weight: 900;
  border-radius: 30px;
  height: 50px;
  margin-top: 20px;
`;

export const IconSpan = styled.span`
  padding: 20px;
`;

// Feed

export const Feed = styled.div`
  flex: 0.5;
  border-right: 1px solid var(--twitter-background);
  min-width: fit-content;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  :-webkit-scrollbar {
    display: none;
  }
`;

export const FeedHeader = styled.div`
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 100;
  border: 1px solid var(--twitter-background);
  padding: 15px 20px;
  h2 {
    font-size: 20px;
    font-weight: 800;
  }
`;

// Widget

export const Widgets = styled.div`
  flex: 0.3;
`;

export const WidgetsInput = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--twitter-background);
  padding: 10px;
  border-radius: 20px;
  margin-top: 10px;
  margin-left: 20px;
  input {
    border: none;
    background-color: var(--twitter-background);
  }
`;

export const WidgetsSearchIcon = styled.div`
  color: gray;
`;

export const WidgetsContainer = styled.div`
  margin-top: 15px;
  margin-left: 20px;
  padding: 20px;
  background-color: #f5f8fa;
  border-radius: 20px;
  h2 {
    font-size: 18px;
    font-weight: 800;
  }
`;
