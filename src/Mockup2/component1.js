import { useEffect, useState } from "react";
import axios from "axios";
import "./component1.css";
export default function Component1({ user, users }) {
  const [albums, setalbums] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/albums")
      .then((res) => setalbums(res.data));
  }, []);
  console.log(albums);
  return albums.map((p) =>
   users.length>0 && albums.length>0 && p.userId === user ? (
      <div className="rightSide">
        <div className="imageClass">
          <img
            src="https://via.placeholder.com/150/771796"
            alt="Girl in a jacket"
            width="100%"
            height="100%"
          />
        </div>
        <div className="leftSide">
          <div>
            <h1>{p.title}</h1>
          </div>
          <div className="details">
            <p>{users[user-1].name}</p>
            <p>{users[user-1].email}</p>
            <p>{users[user-1].erbsite}</p>
          </div>
          <div>
            <button className="button">View Abum</button>
          </div>
        </div>
      </div>
    ) : null
  );
}
