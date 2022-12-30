import { useState } from "react";
import { Link } from "react-router-dom";
import { requestSignup } from "../../../../Service/Auth/AuthService";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onChangeInput = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    if (target.name === "email") {
      setEmail(target.value);
    } else if (target.name === "username") {
      setUsername(target.value);
    } else if (target.name === "password") {
      setPassword(target.value);
    }
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    requestSignup({
      userEmail: email,
      userName: username,
      password: password,
    })
      .then(() => {
        alert("회원가입이 완료되었습니다.");
        window.location.replace("/");
      })
      .catch((ex) => {
        console.log(ex);
        alert("회원 가입에 실패하였습니다.");
      });
  };

  return (
    <div className="container">
      <form onSubmit={onSubmit} className="profileForm">
        <div>
          <input
            name="email"
            type="text"
            placeholder="Email"
            required
            onChange={onChangeInput}
            pattern="[a-z0-9]+@[a-z]+.[a-z]{2,3}"
          />
        </div>
        <div>
          <input
            name="username"
            type="text"
            placeholder="Username"
            required
            onChange={onChangeInput}
          />
        </div>
        <div>
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={onChangeInput}
            required
          />
        </div>
        <div>
          <input type="submit" value="Sign up" />
          <Link to="/">
            <button>Cancel</button>
          </Link>
        </div>
      </form>
    </div>
  );
};
export default Signup;
