import React from "react";
import AddContact from "./AddContact";

const contacts = [
  { name: "Katya", surname: "Popova", phone: "+3809806453" },
  { name: "Petr", surname: "Ivanov", phone: "+3806806125" },
  { name: "Nikolas", surname: "Kein", phone: "+3809704563" },
];

const Contact = ({ name, surname, phone }) => {
  return (
    <li>
      <h3>{name}</h3>
      <div>
        <strong>{surname}</strong>
      </div>
      <div>{phone}</div>
      <button>Edit</button>
      <button>Remove</button>
    </li>
  );
};

const ContactList = () => {
  return (
    <section>
      <AddContact />
      <ul>
        {contacts.map((contact) => {
          return <Contact key={contact.name} {...contact} />;
        })}
      </ul>
    </section>
  );
};

export default ContactList;
