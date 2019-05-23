import React , {Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import Account from './components/account';
import  {BrowserRouter,Switch,Route,Link} from 'react-router-dom';
import { Register } from './components/register';
import { ProductComponent } from './components/product';
function App() {

  return (
    <div className="App">
      <header className="App-header">
         <BrowserRouter>
            <Switch>
              <Fragment>
                <Link to="/accnt">Account</Link>
                <Link to="/regster">Register</Link>
                <Link to="/prd">Product</Link>
                <Route path="/accnt" render={ ()=> <Account/> } />
                <Route path="/regster" render={ ()=> <Register/> } />
                <Route path="/prd" render={ ()=> <ProductComponent/> } />
              </Fragment>
            </Switch>
         </BrowserRouter>
       
      </header>
    </div>
  );
}

export default App;
