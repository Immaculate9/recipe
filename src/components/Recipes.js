import React from 'react';
import { Link } from 'react-router-dom';

const Recipes = props =>(
    <div className="container">
        <div className="row">
    {props.recipes.map((recipe)=>{
        return(
          <div  key={recipe.id} className="col-md-4" style={{marginBottom:"2rem"}}>
              <div className="recipes_box">
                  <img
                  className="recipe_box-img"
                  src={recipe.imageUrls}
                  alt={recipe.title} />
                 <div className="recipe_text">
        <h5 className="recipes_title">
            {/* If recipe length is greater than 20? display recipe.title else reduce it; that is to subtitle and take from index 0 to index 20 */}
            {recipe.title.length < 20 ? `${recipe.title}` : `${recipe.title.substring(0,20)}...`}
            </h5>
        <p className="recipes_subtitle">Servings: <span>{recipe.servings} </span></p>
                 </div>
                 <button className="recipe_button">
                     <Link to={{
                          pathname: `/recipe/${recipe.id}`,
                          state: { recipe: recipe.title}
                          }}>View Recipe</Link>
                 </button>
              </div>
            </div>
        );
      })}
    </div>
    </div>
);

export default Recipes;