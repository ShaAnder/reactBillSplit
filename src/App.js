// IMPORTS //

import { useState } from "react";

import FriendsList from "./components/FriendsList";

import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";

import Button from "./components/Button";

// INITIAL FRIENDS //

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

// APP //

/**
 * Main app function, exports to index js, contains our main handler functions,
 * uplifted state and our main return jsx
 * @returns main jsx for app viewing
 * @author ShaAnder
 */
export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  // Handles show add friend, toggles state between true / false
  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }

  // Handles adding new friend, sets the friends list as a new array
  // that spreads the current array and adds new friends onto the end
  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  }

  // Handles friend selection / deselection, if on click friend is currently
  // selected, deselect else, select
  function handleSelection(friend) {
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  }

  // Handles splitting the bill, takes the values from the form and
  // maps over friend array. Spreads the array and adds the balance onto
  // the end
  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
  }

  // return jsx for rendering
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          selectedFriend={selectedFriend}
          onSelection={handleSelection}
        />

        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}

        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>

      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
          key={selectedFriend.id}
        />
      )}
    </div>
  );
}
