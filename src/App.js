import React from 'react';
import Header from './components/Header';
import Form from './components/Form';
import RecipesList from './components/RecipesList';


import ProviderCategory from './context/ContextCategory';
import ProviderRecipe from './context/ContextRecipe';
import ProviderModal from './context/ContextModal';

function App() {
  return (
    <ProviderCategory>
      <ProviderRecipe>
        <ProviderModal>
          <Header />

          <div className='container mt-5'>
            <div className='row'>
              <Form />
            </div>
            <RecipesList />
          </div>

        </ProviderModal>
      </ProviderRecipe>
    </ProviderCategory>

  );
}

export default App;
