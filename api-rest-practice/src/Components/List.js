import React from 'react';

import { Grid } from '@material-ui/core';
import ProductCard from './ProductCard';

function List({ productData ,classes}) {
    return (
        <div>
            <Grid container spacing={24} justify ='space-around'>
                {
                    productData.map(product => {
                        return (
                            <ProductCard
                                key={product.id}
                                id = {product.id}
                                title={product.title}
                                price={product.price}
                                description={product.description}
                                category={product.category}
                                image={product.image}
                            />
                        )
                    })
                }
            </Grid>
        </div>
    )
}

export default List;