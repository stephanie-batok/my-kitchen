import React from 'react'
import FCRecipe from './FCRecipe'


export default function FCRecipes(props) {
  
    let DishRecipes=props.DishRecipes.map((dish,index)=>
    {return <FCRecipe key={index} Dish={dish} Prepare={true} sendDishToRecipes={props.sendPrepDishToMyKitchen}/>});

    return (
      <div>
        <h1>Recipes</h1>
        <div className='recipesDiv'>
          {DishRecipes}           
        </div>
      </div>
    )
}
