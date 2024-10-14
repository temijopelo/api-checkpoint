import axios from "axios";
import { useEffect, useState } from "react";

const UserList = () => {
  const [listOfUser, setListOfUser] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setListOfUser(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("error fetching user data; ", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2>Loading User...</h2>;
  }

  return (
    <div>
      <h1>Lists of Users</h1>

      <ul>
        {listOfUser.map((user) => (
          <li key={user.id}>
            <p>{`Name: ${user.name}`}</p>
            <p>{`Username: ${user.username}`}</p>
            <p>{`email: ${user.email}`}</p>
            <p>{`Address: ${user.address.suite} ${user.address.street} ${user.address.city}`}</p>
            <p>{`Phone: ${user.phone}`}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
