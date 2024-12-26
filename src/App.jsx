import "./App.css";
import userData from "../src/userData.json";
import friends from "../src/friends.json";
import transactions from "../src/transactions.json";
import Profile from "./components/profile/Profile";
import FirendList from "./components/friendlist/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FirendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
