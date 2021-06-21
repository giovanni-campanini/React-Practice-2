import React from "react";
import Card from "./Card";
import contacts from "../contacts";

const showContact = (contact) => {
  return (
    <Card
      key={contact.id}
      name={contact.name}
      img={contact.imgURL}
      phone={contact.phone}
      mail={contact.email}
    />
  );
};

function App() {
  return (
    <div>
      <h1 className="heading">"My Contacts"</h1>
      {contacts.map(showContact)}
    </div>
  );
}

export default App;
