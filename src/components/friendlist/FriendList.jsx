import FriendListItem from "../FriendListItem/FriendListItem";

const FirendList = ({ friends }) => {
  return (
    <>
      <ul>
        {friends.map((friend) => (
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        ))}
      </ul>
    </>
  );
};

export default FirendList;
