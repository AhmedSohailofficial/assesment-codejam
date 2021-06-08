
// import MockUp1 from './Mockup1'
import Header from './Header1'
import MockUp1 from './Mockup1' 
import Mockup2 from './Mockup2/index'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path="/1">
    <MockUp1/>
    </Route>
    <Route path="/2">
     <Mockup2 />
     </Route>
     </Switch>
  </Router>
  )
}

export default App;
