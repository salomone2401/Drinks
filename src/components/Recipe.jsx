import React, { useContext, useState } from 'react';
import { ContextModal } from '../context/ContextModal';

import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

//le da la posicion
function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}
//le da la apariencia
const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: 450,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const Recipe = ({ recipe }) => {
    //configuracion del modal de material-ui
    const [modalStyle] = useState(getModalStyle);
    //esta en false porque esta cerrado, cuando se pone true se abre
    const [open, setOpen] = useState(false);

    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    //extraer los valores del context
    const { infoRecipe, saveIdRecipe, saveRecipe } = useContext(ContextModal);
    //muestra y formatea los ingredientes
    const showIngredients = infoRecipe => {
        let ingredients = [];
        for (let i = 1; i < 16; i++) {
            if (infoRecipe[`strIngredient${i}`] ) {

                ingredients.push(
                    <li
                        key={
                            infoRecipe[`strIngredient${i}`] +
                            infoRecipe[`strMeasure${i}`]
                        }
                    >
                        {infoRecipe[`strIngredient${i}`]} -{' '}
                        {infoRecipe[`strMeasure${i}`]}
                    </li>
                );
        return ingredients;
    }
}
    }



    return (
        <div className="col-md-4 mb-3">
            <div className="card">
                <h2 className='card-header'>{recipe.strDrink}</h2>
                <img 
                
                className='card-img-top' 
                
                src={recipe.strDrinkThumb} alt={`image from ${recipe.strDrink}`} />

                <div className="card-body">
                    <button
                        type='button'
                        className='btn btn-block btn-primary'
                        onChange={() => {
                            saveIdRecipe(recipe.idDrink);
                            handleOpen();
                        }}
                    >
                        Click for recipe
                    </button>


                    <Modal
                        open={open}
                        onClose={() => {
                            saveIdRecipe(null);
                            saveRecipe({});
                            handleClose();
                        }}
                    >
                        <div style={modalStyle} className={classes.paper}>
                            <h2>{infoRecipe.strDrink}</h2>
                            <h3 className='mt-4'>Instructions</h3>
                            <p>{infoRecipe.strInstructions}</p>
                            <img className='img-fluid my-4' src={infoRecipe.strDrinkThumb}
                            />
                            <h3>Ingredients and quantities</h3>
                            <ul>
                                {showIngredients(infoRecipe)}
                            </ul>
                        </div>
                    </Modal>

                </div>
            </div>
        </div>
    );
}

export default Recipe;