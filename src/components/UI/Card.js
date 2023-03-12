import './Card.css';

const Card=(props)=> {
  //concept of "Compositions" (children props)
  const classes = 'card ' + props.className;
  
  return <div className={classes}>{props.children}</div>;
}

export default Card;