import { useState } from "react";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <div className={styles["form-container"]}>
      <form className={styles.form}>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          className={styles.name}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          className={styles.email}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          className={styles.message}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit" className={styles.submit} onClick={handleSubmit}>
          Sent Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
