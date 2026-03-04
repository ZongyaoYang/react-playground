import { useState, useEffect } from "react";

export default function FetchUser() {
  const [user, setUser] = useState({});

  const fetchData = () => {
    fetch("https://randomuser.me/api")
      .then((res) => res.json())
      .then((data) => setUser(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>This is FetchUser</h1>

      {Object.keys(user).length > 0 ? (
        <div style={{padding: "40px"}}>
          <h2>User</h2>
          <h2>Name: {user.results[0].name.first}</h2>
          <img src={user.results[0].picture.large} alt="" />
        </div>
      ) : (
        <h2>Loading user...</h2>
      )}
    </>
  );
}
