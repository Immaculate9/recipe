import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Form from "./components/Form";
import Recipes from "./components/Recipes";

const API_KEY = "adb77f79c62344a5a7179d98c75d511c";

class App extends Component {
  state ={
    recipes: []
  }
 getRecipe = async(e) => {
   const recipeName = e.target.elements.recipeName.value;
   e.preventDefault();
   const api_call = await fetch(`https://api.spoonacular.com/recipes/search?query=${recipeName}&count=5&apiKey=${API_KEY}`);
   
   const data = await api_call.json();
   //console.log(data.results[0].title);
   this.setState({recipes: data.results});
   console.log(this.state.recipes);
    }
    componentDidMount = () => {
      const json = localStorage.getItem("recipes");
      const recipes = JSON.parse(json);
      this.setState({ recipes});
    }
    componentDidUpdate = () =>{
      const recipes = JSON.stringify(this.state.recipes);
      localStorage.setItem("recipes", recipes);
    }

  render(){
     return (
    <div className="App">
      <header className="App-header">
      <h1 className="App-title">Recipe Search</h1>
      </header>
      <Form getRecipe={this.getRecipe}/>
      {/* {this.state.recipes.map((recipe)=>{
        return(
          <div key={recipe.id}>
            <img src={recipe.imageUrls} alt={recipe.title}/>
            <p>{recipe.title}</p>
          </div>
        );
      })} */}
     <Recipes
     recipes={this.state.recipes}
     />
    </div>
  );
  }
 
}

export default App;
