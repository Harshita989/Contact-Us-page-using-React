import React, { useState } from "react";
import styles from "./ContactForm.module.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const ContactForm = () => {
  const [name, setnames] = useState(" ");
  const [email, setemail] = useState(" ");
  const [text, settext] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    setnames(event.target[0].value);
    setemail(event.target[1].value);
    settext(event.target[2].value);

    console.log(event);
  };
  return (
    <section className={`${styles.container}`}>
      <div className={styles.contactform}>
        <div className={`${styles.top_btn}`}>
          <Button text="VIA SUPPORT CHAT" icon={<MdMessage />} />
          <Button text="VIA CALL" icon={<IoCall />} />
        </div>
        <Button isoutline={true} text="VIA EMAIL FORM" icon={<MdEmail />} />
        <form action="" onSubmit={onSubmit}>
          <div className={`${styles.form_control}`}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={`${styles.form_control}`}>
            <label htmlFor="email">E-mail</label>
            <input type="text" name="email" />
          </div>
          <div className={`${styles.form_control}`}>
            <label htmlFor="text">Text</label>
            <textarea name="text" id="" cols={10} rows={6}></textarea>
          </div>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <Button text="SUBMIT" isoutline={false} />
          </div>
          <div>{name + " " + email + "  " + text};</div>
        </form>
      </div>
      <div className="contactimg">
        <img src="./images/main.png" alt="" />
      </div>
    </section>
  );
};

export default ContactForm;
