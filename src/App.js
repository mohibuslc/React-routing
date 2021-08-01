
import './App.css';
import Home from './Components/Home/Home';
import NoMatch from '../src/Components/NoMatch/NoMatch';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CountryDetails from './Components/CountryDetails/CountryDetails';

function App() {
  return (
    <div>
     <Router>
       <Switch>
         <Route path="/home">
           <Home/>

         </Route>
         <Route path ="/Countries/:NameDetails">
         <CountryDetails/>
           </Route>
         <Route exact path ="/">
           <Home/>
         </Route>
         <Route path="*">
           <NoMatch/>
           </Route>
         
       </Switch>
     </Router>
     </div>
  );
}

export default App;
