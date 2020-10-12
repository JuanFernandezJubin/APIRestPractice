import React, { Component } from 'react';
import Nav from '../Components/Nav';
import List from '../Components/List'

import axios from 'axios';

class ProductListContainer extends Component {
    
    state = {
        productData : []
    }

    componentDidMount(){
        const url = 'https://fakestoreapi.com/products/'
        axios.get(url)
            .then(res =>{
                // console.log(res.data)
                this.setState({
                    productData: res.data
                })
                // console.log(this.state)
            })
            .catch(console.log)
    }

    render(){
        const { productData } = this.state;

        return(
            <div>
                <Nav />
                <h1>Estamos en la pagina principal</h1>
                {/* productData va a contener un array de productos */}
                <List productData = {productData}/>
            </div>
        )
    }
}

export default ProductListContainer;