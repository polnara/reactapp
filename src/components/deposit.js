import React,{Component} from 'react';
import { stat } from 'fs';
import {connect} from 'react-redux';

class DepositComponent extends React.Component {
    handleDeposit = () => {
        console.log("Current amount in Deposit Component :: "+this.props.amount);
        console.log("Deposit amount :: "+this.props.depositAmount);
        
        var depositAmt = this.props.amount + Number(this.props.depositAmount);
        console.log("After deposit amount :: "+depositAmt);
        this.props.dispatch({type:'DEPOSIT',amount:depositAmt})
        //this.props.callback(depositAmt);
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
function mapStateToProps(state){
    return {
        amount : state.amount
    }
}
export default connect(mapStateToProps)(DepositComponent);