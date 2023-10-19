import Friend from "./Friend";

/**
 * FriendsList Component, main component that holds the child components friends
 * @param {*} params -> friends State, onSelectionhandler, selectedfriend State
 * @returns jsx for rendering the friendsList component
 * @author ShaAnder
 */
export default function FriendsList({ friends, onSelection, selectedFriend }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          selectedFriend={selectedFriend}
          onSelection={onSelection}
        />
      ))}
    </ul>
  );
}
