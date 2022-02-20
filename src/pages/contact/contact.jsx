import React, { useState } from "react";
import Btn from "../../components/btn/btn";

import Input from "./components/input";
import Textarea from "./components/textarea";

import "./contact.scss";

export default function Contact() {
  const [name, setName] = useState(" ");
  const [email, setEmail] = useState("");
  const onFormSubmit = (event) => {
    event.preventDefault();
  };

  const onNameChange = (event) => {
    setName(event.target.value);
  };

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };
  return (
    <div className="contact-form-container">
      <h2 className="contact-title">
        Thanks for taking the time to reach out. Please leave a message:
      </h2>

      <form className="contact-form" onSubmit={onFormSubmit}>
        <div className="input-wrapper">
          <div className="input-wrapper-input">
            <Input
              value={name}
              type="text"
              name="name"
              id="name"
              label="Name:"
              onChange={onNameChange}
            />
          </div>
          <div className="input-wrapper-input">
            <Input
              value={email}
              type="email"
              name="email"
              id="email"
              label="Email:"
              onChange={onEmailChange}
            />
          </div>
        </div>
        <div className="text-area-title"> Message:</div>
        <div>
          <Textarea label="Message" />
        </div>
        <div className="submit-button-container">
          <Btn btnText="Submit" />
        </div>
      </form>
    </div>
  );
}
