import React from 'react';
import {Button,Card} from 'react-bootstrap';


export default function FCRecipe(props) {

  const btnPrepare=()=>{
    props.sendDishToRecipes(props.Dish);
  }

  const btnEat=()=>{
    props.sendDishToRecipesDone(props.Dish);
  }

  let btn=props.Prepare? <Button variant="primary" onClick={btnPrepare}>Prepare dish</Button>:
  <Button variant="danger" onClick={btnEat}>eat</Button>;


    return (
            <Card style={{ width: '18rem'}}>
              <Card.Img variant="top" src={props.Dish.image} />
               <Card.Body>
                 <Card.Title>{props.Dish.name}</Card.Title>
                     <Card.Text>
                      {props.Dish.cookingMethod}
                    </Card.Text>
                      {btn}
                  </Card.Body>
                </Card>
    )
}
