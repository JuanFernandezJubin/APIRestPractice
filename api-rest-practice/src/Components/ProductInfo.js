// import React from 'react';

// function ProductInfo({ title, price, description, category ,image }) {
//     return (
//         <div>
//             <h1>{title}</h1>
//             <h1>{price}</h1>
//             <h1>{description}</h1>
//             <h1>{category}</h1>
//             <h1>{image}</h1>
//         </div>
//     )
// }

// export default ProductInfo;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: '350px',
    minHeight: '500px'
  },
  media: {
    height: 140,
  },
  container: {
      justifyContent:'center'
  }
});

export default function ProductInfo({ title, price, description, category ,image }) {
  const classes = useStyles();

  return (
      <div className = {classes.container}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image= {image}
          title= {title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">{title}</Typography>
          <Typography variant="body2" color="textSecondary" component="p">{description}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">{price}</Button>
        <Link to='/products'><Button size="small" color="primary">{category}</Button></Link>
      </CardActions>
    </Card>
    </div>
  );
}
