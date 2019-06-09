import React , {Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import Account from './components/account';
import  {BrowserRouter,Switch,Route,Link} from 'react-router-dom';
import { Register } from './components/register';
import { ProductComponent } from './components/product';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
const initialState = {
  amount : 10000
}

function accountReducer(state=initialState , action){
  console.log(action);
  switch(action.type){
    case 'WITHDRAW':
      return {
        amount:action.amount
      }
    case  'DEPOSIT':
      return {
        amount:action.amount
      }
    default :
      return state;

  }
  
}

const accountStore = createStore(accountReducer);

const App = () => {

  return (
    <div className="App">
      <header className="App-header">
        <Provider store={accountStore}>
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
       </Provider>
      </header>
    </div>
  );
}

export default App;
