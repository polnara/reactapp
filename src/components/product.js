import React,{Component} from 'react';
import '../App.css';
import Axios from 'axios';

export class ProductComponent extends React.Component {
    constructor(){
        super();
        this.state = {
            responseData:[]
        }
    }
    componentDidMount(){
        Axios.get('http://localhost:8020/productList/api/product')
        .then(res => {
            console.log(res)
            this.setState({responseData:res.data})
        }).catch(err => {
            console.log(err);
        })

        console.log("Component Did Mount called ")
    }
    componentDidCatch(){
        console.log("Error occured")
    }
    componentWillMount(){
        console.log("Componnent will mount")
    }
    render(){
        const { resData } = this.state;
        console.log(resData)
        return (
            <div>
               {
                   this.state.responseData.map(record => (
                       <li>{record.Name}</li>
                   
                   ))
               }
            </div>
        )
    }
}