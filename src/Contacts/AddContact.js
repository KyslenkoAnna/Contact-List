import React, { useState } from "react";

const AddContact = () => {
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <React.Fragment>
      {showForm ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <input type="text" placeholder="concact name" name="Name" />
          </div>
          <div>
            <label>Surname</label>
            <input type="text" placeholder="concact surname" name="Surname" />
          </div>
          <div>
            <label>Phone Number</label>
            <input type="text" placeholder="concact phone" name="PhoneNumber" />
          </div>
          <button type="submit">Save concact</button>
          <button onClick={() => setShowForm(false)}>Cancel</button>
        </form>
      ) : (
        <button onClick={() => setShowForm(true)}>Add new contact</button>
      )}
    </React.Fragment>
  );
};

export default AddContact;
