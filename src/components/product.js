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
    render(){
        const { resData } = this.state;
        console.log(resData)
        return (
            <div>
                    this.state.responseData[0]
                }
            </div>
        )
    }
}