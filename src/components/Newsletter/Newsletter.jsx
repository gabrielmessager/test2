import { useState } from "react";

export const Newsletter = () => {
  const [emailAddress, setEmailAddress] = useState(null);

  function handleSubmit(event) {
    console.log("email address", emailAddress);
    event.preventDefault();
  }

  return (
    <section id="newsletter">
      <div className="container">
        <div className="row newsletter__row">
          <h2 className="newsletter__title">Newsletter</h2>

          <form className="newsletter__form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter Email Address"
              className="newsletter__form__input"
              onChange={(event) => setEmailAddress(event.target.value)}
              required
            />
            <button className="newsletter__form__submit">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
};
