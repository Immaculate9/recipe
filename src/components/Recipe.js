import React from 'react';
import{ Link} from "react-router-dom"


const API_KEY = "adb77f79c62344a5a7179d98c75d511c";

class Recipe extends React.Component {
    state = {
        activeRecipe: []
    }
    componentDidMount= async ()=>{
        const title = this.props.location.recipe;
        const req = await fetch(`https://api.spoonacular.com/recipes/search?query=${title}&apiKey=${API_KEY}`);
        
        const res = await req.json();
        //console.log(res.results[0])
        this.setState({ activeRecipe: res.results[0]});
        console.log(this.state.activeRecipe);
    }
    render(){
        const recipe = this.state.activeRecipe;
        return(
        <div className="container">
           {
               this.state.activeRecipe.length!==0 &&
               <div className="active-ecipe">
               <img className="active-recipe_img" src ={recipe.imageUrls} alt ={recipe.title}/>
       <h3 className ="active-reipe_title">{recipe.title}</h3>
       <h5>Time to be ready in minutes: {recipe.readyInMinutes}</h5>
       <h5>Servings: {recipe.servings}</h5>

           <button className="active-recipe_button">
               <Link to="/">Go Home</Link> 
               </button>
           </div>
           }
        </div>
        );
    }
    
};
    

export default Recipe;