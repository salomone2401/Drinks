
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

//crear el context
export const ContextCategory = createContext();

// Provider es donde se encuentran las funciones y state
const ProviderCategory = (props) => {

    //crear state del context
    const [categories, saveCategories] = useState([]);

    //ejecutar el llamado a la api usando axios
    useEffect(() => {
        const getCategories = async () => {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

            const categories = await axios.get(url);
            saveCategories(categories.data.drinks);
        }
        getCategories();
    }, []);


    //ejecutar el llamado a la api usando fetch
    // const consultarAPI = async () => {
    //     const api = await fetch('https:www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
    //     const categories = await api.json()
    //     console.log(categories);
    //   }
    //   consultarAPI();
    // }, []);


    //return estan todos los datos y cosas q se le pasan a los otros componentes
    return (
        // lo que esta dentro de la etiqueta: {props.children} son los diferentes componentes
        <ContextCategory.Provider
            //dentro del value van los elementos que quiero que esten disponibles en los demas componentes
            value={{
                categories
            }}>
            {props.children}
        </ContextCategory.Provider>
    )
}
export default ProviderCategory;