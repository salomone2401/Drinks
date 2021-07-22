import React, { useContext, useState } from 'react';
import { ContextCategory } from '../context/ContextCategory';
import { ContextRecipe } from '../context/ContextRecipe';

const Form = () => {

    const [search, saveSearch] = useState({
        name: '',
        category: ''
    })
   

    const {categories} = useContext(ContextCategory);
    const {searchRecipes, saveConsult} = useContext(ContextRecipe);

    //funcion para leer los contenidos
    const getDataRecipe = e =>{
        saveSearch({
            ...search,
            [e.target.name] : e.target.value
        })
    }

    return (
        <form
            className='col-12'
            onSubmit={e =>{
                e.preventDefault();
                searchRecipes(search);
                saveConsult(true);
            }}
            >
            <fieldset className='text-center'>
                <legend>Search drink by category or ingredients</legend>
            </fieldset>

            <div className="row mt-4">
                <div className="col-md-4">
                    <input
                        name='name'
                        className='form-control'
                        type='text'
                        placeholder='Search by ingredient'
                        onChange={getDataRecipe}
                    />
                </div>
                <div className="col-md-4">
                    <select
                        className='form-control'
                        name='category'
                        onChange={getDataRecipe}
                    >
                        <option value=''>--Select Category</option>
                        {categories.map(category => (
                            <option 
                            key={category.strCategory}
                           value={category.strCategory}
                            >{category.strCategory}</option>
                        ))}
                    </select>
                   
                </div>
                <div className="col-md-4">
                    <input
                        type="submit"
                        className="btn btn-block btn-primary"
                        value="Search Drinks"
                    />
                </div>
            </div>
        </form>
    );
}

export default Form;