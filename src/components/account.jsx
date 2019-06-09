import React,{Component} from 'react';
import '../App.css';
import {connect} from 'react-redux';
import  DepositComponent  from './deposit';
import  WithdrawComponent  from  './withdraw';
class Account extends React.Component{
    constructor(state){
        super(state);
        this.state = {"amount":40000,"error":""}; 
    }
    iserror = false;

   /* setoutput = (output) => {
        console.log("Output :: "+output);
        this.setState({"amount":output});
    }
    */
    handleText = (event) => {
        this.setState({ [event.target.id] : event.target.value});

    }
    render(){
        return (
            <div>
                <h6 className='red'> {this.state.error}</h6>
                <h4>current Amount :: {this.props.amount}</h4>
                <input type='text' id='amt' onChange={this.handleText} /> 
                <div>
                    <WithdrawComponent withdrawAmount={this.state.amt}/>
                </div>
                <div>
                    <DepositComponent depositAmount={this.state.amt}/>
                </div>
                <h4>It is Account Component</h4>
            </div>
        );
    }
    
}

function mapStateToProps(state){
    return {
        amount:state.amount
    }
}
export default connect(mapStateToProps)(Account);