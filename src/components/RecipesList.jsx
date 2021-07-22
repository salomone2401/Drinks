import React, { useContext } from 'react';
import {ContextRecipe} from '../context/ContextRecipe';
import Recipe from './Recipe';

const RecipesList = () => {

    //Extraer las recetas
    const {recipes} = useContext(ContextRecipe);

    return (
        <div className="row mt-5">
          {recipes.map(recipe => (
            <Recipe
            
            key={recipe.idDrink}
            recipe={recipe}
            />

          ))}
        </div>
      );
}
 
export default RecipesList;