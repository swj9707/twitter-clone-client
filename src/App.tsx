import React from "react";
import { AppRouter } from "./Components";

function App() {
  return (
    <>
      <AppRouter isLoggedIn={true} />
      <footer>https://github.com/swj9707/twitter-clone-client</footer>
    </>
  );
}

export default App;
