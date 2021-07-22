import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

//crear el context
export const ContextModal = createContext();

const ProviderModal = (props) => {

    //state del provider
    const [idRecipe, saveIdRecipe] = useState(null);
    const [infoRecipe, saveRecipe] = useState({});
    
    //una vex q tenemos una receta llamar a la api
    useEffect(() => {
        //usando axios
            const getRecipe = async () => {
                if(!idRecipe) return;

                const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idRecipe}`;
                
                const result = await axios.get(url);
                // console.log(result.data.drinks);
                saveRecipe(result.data.drinks[0]);
            }
            getRecipe();
    }, [idRecipe]);

    return (
        <ContextModal.Provider
            value={{
                infoRecipe,
                saveIdRecipe,
                saveRecipe
         
            }}>
            {props.children}
        </ContextModal.Provider>
    );
}
export default ProviderModal;