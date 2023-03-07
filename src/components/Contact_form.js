import React, { Component, useRef } from "react";
import { Box, Columns, Container, Content } from "react-bulma-components";

import emailjs from "@emailjs/browser";

export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yu1omg9",
        "template_q64ztcq",
        form.current,
        "fyejM9DucPV2ID0UG"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    document.getElementById("contactr").reset();
  };

  let noSubmit = true;

  function onChange(value) {
    console.log("I have seen things:");
  }

  return (
    <Container>
      <Box>
        <Content>
          <b> Contact us today! </b> <hr />
        </Content>
        <div className="form" id="contactr" ref={form} onSubmit={sendEmail}>
          <Columns className="field is-vcentered">
            <Columns.Column>
              <label className="label">Name</label>
            </Columns.Column>
            <Columns.Column className="is-three-quarters">
              <div className="control ">
                <input
                  className="input"
                  type="text"
                  name="from_name"
                  required
                />
              </div>
            </Columns.Column>
          </Columns>

          <Columns className="field is-vcentered">
            <Columns.Column>
              <label className="label">Phone</label>
            </Columns.Column>
            <Columns.Column className="control is-three-quarters">
              <input className="input" type="text" name="phone" required />
            </Columns.Column>
          </Columns>

          <Columns className="field is-vcentered">
            <Columns.Column className="label">Email</Columns.Column>
            <Columns.Column className="control is-three-quarters">
              <input
                className="input"
                type="email"
                name="user_email"
                required
              />
            </Columns.Column>
          </Columns>

          <Columns className="field is-vcentered">
            <Columns.Column className="label">Message</Columns.Column>
          </Columns>
          <Columns>
            <Columns.Column className="control">
              <textarea className="textarea" rows={3} name="message" />
            </Columns.Column>
          </Columns>
          <div className="control">
            <button className="button is-info is-fullwidth" type="submit">
              Send
            </button>
          </div>
        </div>
      </Box>
    </Container>
  );
};

export default ContactForm;
