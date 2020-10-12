import React from 'react';
import { AppBar, Typography, Toolbar } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';



function Nav(props) {

    //variable de estilo
    const { classes } = props;
    
    return (
        <AppBar className={classes.NavColor} position='static'>
            <Toolbar variant='dense'>
                <Typography variant='h6' component='p' className={classes.texto}>Clothes APP</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default withStyles({
    NavColor: {
        backgroundColor: '#EF5350'
    },
    texto : {
        color: '#CECECE'
    }
})(Nav);