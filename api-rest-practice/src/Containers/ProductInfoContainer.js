import React, { Component } from 'react';
import ProductInfo from '../Components/ProductInfo';

import axios from 'axios';

class ProductInfoContainer extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            id : "",
            title : "",
            price : "",
            category: "",
            description: "",
            image : ""
        }
    }

    componentDidMount(){

        const {match} = this.props;
        const id = match.params.id
        const url = `https://fakestoreapi.com/products/${id}`

        axios.get(url)
            .then(res => {
                // console.log(res.data)
                const product = res.data;
                this.setState({
                    id: product.id,
                    title: product.title ,
                    price: product.price,
                    category: product.category,
                    description: product.description ,
                    image: product.image
                })
                // console.log(this.state)
            })
            .catch(console.log)

    }

    render(){
        
        const product = this.state;
        // console.log(product.id)

        return (
            <ProductInfo
                key= {product.id}
                id = {product.id}
                title={product.title}
                price={product.price}
                description={product.description}
                category={product.category}
                image={product.image}
            />
        )
    }
}

export default ProductInfoContainer;