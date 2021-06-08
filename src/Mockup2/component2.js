
import "./component2.css";
export default function Component2({ user, users,selectingUser }) {
 
  return (
    <div className="Compnent2">
      <div className="compHeader">Filter Album</div>
      <div className="userslist">
        {users.map((p) => (
          <p
            className={p.id === user ? "activeuser" : "notactive"}
            onClick={() => selectingUser(p.id)}
          >
            User {p.id}
          </p>
        ))}
      </div>
    </div>
  );
}
