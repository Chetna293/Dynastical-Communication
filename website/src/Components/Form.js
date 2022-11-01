import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

// npm i @emailjs/browser

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mcl9eta",
        "template_gux7tj4",
        form.current,
        "PApHXFlP83JnCoRW9"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact">
      <StyledContactForm>
          <h3>Let's Get In Touch</h3>
          <h1>Contact Us</h1>
          <p>We would like to ask you about any new projects you'll have or any of the services that we offer... Reach us at:</p>
        <form ref={form} onSubmit={sendEmail}>
          
          <input type="text" name="user_name" placeholder="Name..." />
          
          <input type="email" name="user_email" placeholder="Email..." />
        
          <textarea name="message" placeholder="Message..." />
          <input type="submit" value="Send" />
        </form>
      </StyledContactForm>
    </section>
  );
};

export default Contact;

// Styles
const StyledContactForm = styled.div`
  width: 100%;
  h3{
    width:100%;
    text-align:center;
  }
  h1{
    width:100%;
    font-size:40px;
    text-align:center;
    color:#eb6234
  }
  p{
    font-size:18px;
    font-family: sans-serif;
    text-align:center;
    margin:30px 0px;
    color:#ffffff;
  }
  form {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height:auto;
    justify-items:center;
    font-size: 16px;
    input {
      width: 35%;
      height: 35px;
      padding: 5px;
      margin-top:10px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    textarea {
      max-width: 35%;
      min-width: 35%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      margin-top:10px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    input[type="submit"] {
      max-height: 50px;
      min-height: 50px;
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
      font-size:18px;
    }
  }
`;