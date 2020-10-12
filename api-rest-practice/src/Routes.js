import React from 'react';
//Only React 
import { Switch, Route } from 'react-router-dom';

//Components
import Home from './Components/Home'
import ProductInfoContainer from './Containers/ProductInfoContainer';
import ProductListContainer from './Containers/ProductListContainer';


const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/products' component= {ProductListContainer}/>
            <Route exact path='/products/:id' component= {ProductInfoContainer}/>
        </Switch>
    )
}

export default Routes;