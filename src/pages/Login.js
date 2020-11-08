import React, { useState } from "react";
import axios from "axios";

export const Login = (props) => {
  const [formState, setFormState] = useState({
    username: "",
    password: "",
  });

  const { username, password } = formState;

  const handleChange = (e) => {
    e.persist();
    // const value = e.target.type === "file" ? e.target.files[0] : e.target.value;
    setFormState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/")
    .then(req=>req.text())
    .then(res=>console.log)
    
    // debugger


    // console.log(formState);
    // axios.get("http://localhost:5000/", formState).then((res) => {
    //   // send up data  in props to check if user is logged in
    //   console.log(res.data);
    // });
  };

  return (
    <div className="login">
      <div className="initialize">
        <div className="initialize__selection">
          <button className="initialize__selection__login-btn">Log In</button>
          <button className="initialize__selection__register-btn">
            Register
          </button>
        </div>
        <div className="initialize__text">Sign up, its FREE!</div>

        <form className="initialize__form" onSubmit={handleSubmit}>
          <input
            classNamme="initialize__form__input"
            type="text"
            placeholder="e-mail"
            name="username"
            value={username}
            onChange={handleChange}
          />
          <input
            classNamme="initialize__form__input"
            type="password"
            placeholder="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
          <button className="initialize__form__submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};
