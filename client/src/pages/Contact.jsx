import { useState } from "react";
import { useAuth } from "../store/auth";

const defaultContactFormData = {
  username: "",
  email: "",
  message: "",
};
export const Contact = () => {
  const [contact, setContact] = useState(defaultContactFormData);
  const [userData, setUserData] = useState(true);
  const { user } = useAuth();
  if (userData && user) {
    setContact({
      username: user.username,
      email: user.email,
      message: "",
    });
    setUserData(false);
  }
  const handleInput = (e) => {
    //spread operator kehte h issey shayad
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/api/form/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });
      if (response.ok) {
        setContact(defaultContactFormData);
        const data = await response.json();
        console.log(data);
        alert("message sent  successfully.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section>
        <main className="box">
          <form onSubmit={handleSubmit}>
            <div className="inputBox">
              <label htmlFor="username">username</label>
              <input
                type="text"
                name="username"
                placeholder="username"
                id="username"
                required
                autoComplete="off"
                value={contact.username}
                onChange={handleInput}
              />
            </div>
            <div className="inputBox">
              <label htmlFor="email">email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="type your email"
                required
                autoComplete="off"
                value={contact.email}
                onChange={handleInput}
              />
            </div>
            <div className="inputBox">
              <label htmlFor="message">message</label>
              <input
                type="text"
                name="message"
                id="message"
                required
                autoComplete="off"
                value={contact.message}
                onChange={handleInput}
                cols="30"
                rows="3"
              />
            </div>
            <button type="submit" style={{ float: "left" }}>
              Submit
            </button>
          </form>
        </main>
      </section>
    </>
  );
};
