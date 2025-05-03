import { Route,Routes } from "react-router-dom"
import HomePages from "./pages/HomePages"
import CategoryPages from "./pages/CategoryPages"
import NotFound from "./pages/NotFound"
import CategoryRecipe from "./pages/CategoryRecipes"
import RecipeDetail from "./pages/RecipesDetails"

function App() {


  return (
    <>
     <Routes>
        <Route path="/" element ={ <HomePages/>} />
        <Route path="/Category" element ={ <CategoryPages/>} />
        <Route path= "/Category/:id" element = {<CategoryRecipe/>}/>
        <Route path= "/receta/:id" element = {<RecipeDetail/>}/>
        <Route path="*" element ={ <NotFound/>} />
     </Routes>
    </>
  )
}

export default App
