import React,{Component} from 'react';
import '../App.css';

 class Account extends React.Component{
    constructor(state){
        super(state);
        this.state = {"amount":50000,"error":""}; 
    }
    iserror = false;
    handleWithdraw = ()=>{
        
        var withdrawAmt = this.state.amt;
        if(withdrawAmt <= this.state.amount){
            var withdrawResult =  this.state.amount - withdrawAmt
            this.setState({"amount":withdrawResult})
        }else{
            this.iserror = true;
            this.setState({"error":"You don't have sufficient balance to withdraw"});
        }
    }
    handleDeposit = () => {
        var depositAmt = Number(this.state.amt);
        this.setState({"amount":this.state.amount + depositAmt});
    }
    handleText = (event) => {
        this.setState({ [event.target.id] : event.target.value});

    }
    render(){
        return (
            <div>
                <h6 className='red'> {this.state.error}</h6>
                <h4>current Amount :: {this.state.amount}</h4>
                <input type='text' id='amt' onChange={this.handleText} /><button onClick={this.handleWithdraw}>Withdraw</button><button onClick={this.handleDeposit}>Deposit</button>
                <h4>It is Account Component</h4>
            </div>
        );
    }
    
}

export default Account;