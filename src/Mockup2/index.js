import{useState,useEffect} from "react"
import axios from "axios"
import Component1 from "./component1";
import Component2 from "./component2";
import "./Mockup2.css";
export default function Mockup2() {
   const [user,setuser]=useState(1)
   const [users, setUsers] = useState([]);
   useEffect(() => {
     axios
       .get("https://jsonplaceholder.typicode.com/users")
       .then((res) => setUsers(res.data));
   }, []);
   function selectingUser(p)
   {
     setuser(user=>user=p)
   }
  return (
    <div className="MainC">
        <div  className="component1">
      <Component1  user={user} users={users}/>
      </div>
      <div className="component2">
      <Component2 user={user} users={users} selectingUser={selectingUser}/>
      </div>
    </div>
  );
}
