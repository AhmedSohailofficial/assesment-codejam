import "./header.css"
import {Link}  from "react-router-dom"
export default function Header()
{
    return(
        <div className="Main">
        <div className="header">
          <button className="buttonHeader" >Photo Album app</button>
          <Link  className="buttonHeader1"  to="/1" >Component1</Link >
          <Link  className="buttonHeader2" to="/2">Component2</Link >
        </div>
        </div>
    )
}