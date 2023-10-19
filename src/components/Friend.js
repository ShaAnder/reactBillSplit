import Button from "./Button";

/**
 * Friends Component, child component to the friendList, creates a component for each
 * friend added and the default friends in the state
 * @param {*} params -> friends State, onSelectionhandler, selectedfriend State
 * @returns jsx for rendering each friend component
 * @author ShaAnder
 */

export default function Friend({ friend, onSelection, selectedFriend }) {
  // selected friend, set if there is an id and it's the same as the one we're clicking
  const isSelected = selectedFriend?.id === friend.id;

  // render jsx
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}$
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {Math.abs(friend.balance)}$
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}

      <Button onClick={() => onSelection(friend)}>Select</Button>
    </li>
  );
}
