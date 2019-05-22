import React , {Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import Account from './components/account';
import  {BrowserRouter,Switch,Route,Link} from 'react-router-dom';
function App() {

  return (
    <div className="App">
      <header className="App-header">
         <BrowserRouter>
            <Switch>
              <Fragment>
                <Link to="/accnt">Account</Link>
                <Route path="/accnt" render={ ()=> <Account/> } />
              </Fragment>
            </Switch>
         </BrowserRouter>
       
      </header>
    </div>
  );
}

export default App;
