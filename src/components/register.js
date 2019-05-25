import React,{Component} from 'react';
import '../App.css';
import Axios from 'axios';

export class Register extends React.Component {
    constructor(){
        super();
        this.state = {'message':''};
    }
    handleRegister = event => {
        console.log(this.state);

        Axios.post('http://localhost:8020/productList/api/product',this.state)
        .then(res => {
            this.setState({'message':'Registerd successfully'})
            console.log(res);
        })
        .catch(errmsg => {
            console.log("Error message");
        })

    }
    handleText = event =>{
        this.setState({
            [event.target.id]:event.target.value
        })
    }
    render(){
        return (
            <div>
                <div>
                    {this.state.message}
                </div>
                <div className='form'>
                    <input type="text" id='Name' placeholder='Enter Name ' onChange={this.handleText}/>
                    <input type='text' id='Company' placeholder = 'Enter Company' onChange={this.handleText}/>
                    <select id='Country' onChange={this.handleText}>
                        <option>India</option>
                        <option>USA</option>
                    </select>
                    <input type='password' id='Key' placeholder='Enter secreat key' onChange={this.handleText}/>
                    <input type='number' id='warrentyPeriod' placeholder='Enter warrenty period' onChange={this.handleText}/>
                    <input type='radio' name='type' id='type' value='resell' onChange={this.handleText}/>resell 
                    <input type='radio' name='type' id='type' value='company' onChange={this.handleText}/>Company
                    <button onClick={this.handleRegister}>Register</button>
                </div>
            </div>
        )
    }
}