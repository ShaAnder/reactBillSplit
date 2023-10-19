import { useState } from "react";
import Button from "./Button";

/**
 * Form component to add new friends, contains submit handler and name/image state
 * @param {*} params -> onAddFriend handler
 * @returns jsx for the add friend form
 * @author ShaAnder
 */
export default function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  // handle form ddefaults
  function handleSubmit(e) {
    e.preventDefault();

    //guard clause
    if (!name || !image) return;

    //create a new id
    const id = crypto.randomUUID();
    // create a new friend
    const newFriend = {
      name,
      image: `${image}?=${id}`,
      balance: 0,
      id,
    };

    //pass this up to add friend handler
    onAddFriend(newFriend);
  }

  // render jsx
  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>🧑‍🤝‍🧑 Friend Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>🖼️ Image url</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <Button>Add</Button>
    </form>
  );
}
