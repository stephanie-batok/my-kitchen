import React from 'react'
import FCRecipe from './FCRecipe'


export default function FCRecipesDone(props) {
    
    let header=props.counter!==0?<h1>Ready To Eat</h1>:"";
    let count=props.counter!==0?<h3>Recipes made: {props.counter}</h3>:"";

    let DishReady=props.DishReady.map((dish,index)=>
    {return <FCRecipe key={index} Dish={dish} Prepare={false} sendDishToRecipesDone={props.sendEatenDishToMyKitchen}/>});

    return (
        <div>
         {header}
         {count}
            <div className='recipesDiv'>
                 {DishReady}
            </div>
        </div>
    )
}
