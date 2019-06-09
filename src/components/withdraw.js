import React,{Component} from 'react';
import {connect} from 'react-redux';

class WithdrawComponent extends React.Component {
    handleWithdraw = ()=>{
        console.log("Current Amount in withdraw compnent :: "+this.props.currentAmount)
        console.log("with draw Amount :: "+this.props.withdrawAmount);
        
        var withdrawAmt = this.props.withdrawAmount;
        if(withdrawAmt <= this.props.amount){
            var withdrawResult =  this.props.amount - withdrawAmt
            this.props.dispatch({type:'WITHDRAW',amount:withdrawResult})
            //this.props.callback(withdrawResult);
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

function mapStateToProps(state){
    return {
        amount:state.amount
    }
}
export default connect(mapStateToProps)(WithdrawComponent);