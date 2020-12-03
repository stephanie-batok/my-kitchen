import React, { Component } from 'react'
import { DishRecipe } from '../Classes/DishRecipe';
import ENavbar from '../ElementComponents/ENavbar';
import FCRecipes from '../FunctionalComponents/FCRecipes';
import FCRecipesDone from '../FunctionalComponents/FCRecipesDone';


const Dishes=[
    new DishRecipe('Ice Cream','Combine the frozen strawberries and sugar in a food processor or blender. Process until the fruit is roughly chopped. With the processor running, slowly pour in the heavy cream until fully incorporated. Serve immediately, or freeze for up to one week.','https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F454065.jpg'),
    new DishRecipe('Lemon Strawberry Yogurt','Spoon about half of the lemon yogurt into the bottom of a glass. Layer half the crushed graham crackers atop the yogurt. Pile about half the strawberries atop the graham cracker layer. Repeat layering.','https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F831761.jpg&w=596&h=596&c=sc&poi=face&q=85'),
    new DishRecipe('Peanut Butter Freezer Fudge','Whisk peanut butter and maple syrup together in a bowl until combined. Pour onto 1 sheet of parchment paper. Cover peanut butter mixture with second sheet of parchment paper; flatten.','https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F3857016.jpg&w=596&h=399&c=sc&poi=face&q=85')

]

export default class CCMyKitchen extends Component {
    constructor(props){
        super(props);

        this.state={
            DishesList:Dishes,
            DishesReady:[],
            count:0
        }
    }

    getDishFromRecipes=(data)=>{
        //remove Recipe from DishesList
        let NewDishesList=this.state.DishesList.filter(d=>d.name!==data.name);
        //add Recipe to DishesReady
        let NewDishesReady=[...this.state.DishesReady,data];

        this.setState({DishesList:NewDishesList,DishesReady:NewDishesReady,count:this.state.count+1});
    }

    getDishFromRecipesDone=(data)=>{
        //add Recipe to DishesList
        let NewDishesList=[...this.state.DishesList,data];
        //remove Recipe from DishesReady
        let NewDishesReady=this.state.DishesReady.filter(d=>d.name!==data.name);

        this.setState({DishesList:NewDishesList,DishesReady:NewDishesReady,count:this.state.count-1});
    }
    
    render() {
        return (
            <div>
                {ENavbar}
                <FCRecipes DishRecipes={this.state.DishesList} sendPrepDishToMyKitchen={this.getDishFromRecipes}/>
                <FCRecipesDone DishReady={this.state.DishesReady} counter={this.state.count} sendEatenDishToMyKitchen={this.getDishFromRecipesDone} />
                <h6>© Recipes from AllRecipes.com ©</h6>
            </div>
        )
    }
}


