import { useState } from "react";

/*
  You can find all CSS in index.css

  Fantawesome is linked in index.html and the google font is imported in index.css

  I dont't have access to all the figma, so I have to guess the styles.
*/

const Newsletter = (props) => {
  const [users, setUsers] = useState(0);

  // function will increment the count with every subscription
  const subscribe = (event) => {
    event.preventDefault();
    // NOTE: next statement is for the test. Needs to be removed or prop needs to be passed by index
    if (typeof props.onSubmit === 'function') {
      // Do stuff; 
      props.onSubmit(event.target.elements.mail.value)
    }
    setUsers(users + 1);
  }
  return (
    <div className="Newsletter">
      <form className="subscriptionForm" onSubmit={(event) => subscribe(event)}>
        <label className="label" htmlFor="mail">
          <i class="fas fa-mail-bulk"></i>
          <div className="description">
            <h2>Zapisz się do newslettera</h2>
            <p>Bądź informowany o każdej zmianie</p>
          </div>
        </label>
        <input type="email" id="mail" name="mail" placeholder="Twój adres email" required />
        <input className="submitButton" type="submit" value="ZAPISZ SIE" />
      </form>
      <p className="userCount">{users} twoich znajomych już nas subskrybuje</p>
    </div>
  );
};

export default Newsletter;
