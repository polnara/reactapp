import React,{Component} from 'react';
import '../App.css';

 class Account extends React.Component{
    constructor(state){
        super(state);
        this.state = {"amount":50000,"error":""}; 
    }
    iserror = false;

    setoutput = (output) => {
        console.log("Output :: "+output);
        this.setState({"amount":output});
    }
    
    handleText = (event) => {
        this.setState({ [event.target.id] : event.target.value});

    }
    render(){
        return (
            <div>
                <h6 className='red'> {this.state.error}</h6>
                <h4>current Amount :: {this.state.amount}</h4>
                <input type='text' id='amt' onChange={this.handleText} /> 
                <div>
                    <WithdrawComponent currentAmount={this.state.amount} withdrawAmount={this.state.amt} callback={this.setoutput}/>
                </div>
                <div>
                    <DepositComponent currentAmount={this.state.amount} depositAmount={this.state.amt} callback={this.setoutput}/>
                </div>
                <h4>It is Account Component</h4>
            </div>
        );
    }
    
}

export class WithdrawComponent extends React.Component {
    handleWithdraw = ()=>{
        console.log("Current Amount in withdraw compnent :: "+this.props.currentAmount)
        console.log("with draw Amount :: "+this.props.withdrawAmount);
        
        var withdrawAmt = this.props.withdrawAmount;
        if(withdrawAmt <= this.props.currentAmount){
            var withdrawResult =  this.props.currentAmount - withdrawAmt
            this.props.callback(withdrawResult);
            //this.setState({"amount":withdrawResult})
        }else{
            this.iserror = true;
            this.setState({"error":"You don't have sufficient balance to withdraw"});
        }
        
    }
    render (){
       return (
            <div>
            <button onClick={this.handleWithdraw}>Withdraw</button>
            </div>
       )
    }
}

export class DepositComponent extends React.Component {
    handleDeposit = () => {
        console.log("Current amount in Deposit Component :: "+this.props.currentAmount);
        console.log("Deposit amount :: "+this.props.depositAmount);
        
        var depositAmt = this.props.currentAmount + Number(this.props.depositAmount);
        this.props.callback(depositAmt);
        //this.setState({"amount":this.props.currentAmount + depositAmt});
        
    }
    render (){
        return (
            <div>
                <button onClick={this.handleDeposit}>Deposit</button>
            </div>
        )
    }
}
export default Account;