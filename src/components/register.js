import React,{Component} from 'react';
import '../App.css';

export class Register extends React.Component {
    render(){
        return (
            <div>
                <form id='form'>
                    <input type="text" placeholder='Enter Name '/>
                    <input type='text' placeholder = 'Enter Company'/>
                    <select>
                        <option>India</option>
                        <option>USA</option>
                    </select>
                    <input type='password' placeholder='Enter secreat key'/>
                    <input type='number' placeholder='Enter warrenty period'/>
                    <input type='radio'/>resell <input type='radio'/>Company
                    <button>Register</button>
                </form>
            </div>
        )
    }
}