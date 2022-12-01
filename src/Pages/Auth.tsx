import React, { useState } from "react";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <form>
        <input
          name="email"
          type="text"
          placeholder="Email"
          required
          value={email}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          value={password}
        />
        <div>
          <button>"Sign In"</button>
          <input type="submit" value="Sign In" />
        </div>
      </form>

      <div>
        <button name="google">Continue with Google</button>
      </div>
    </div>
  );
};

export default Auth;
