import { Route, Routes, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import HomePages from "./pages/HomePages";
import CategoryPages from "./pages/CategoryPages";
import CategoryRecipe from "./pages/CategoryRecipes";
import RecipeDetail from "./pages/RecipesDetails";
import Register from "./pages/register";
import Login from "./pages/login";
import NotFound from "./pages/NotFound";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('isAuthenticated') === 'true');
  const [userName, setUserName] = useState(localStorage.getItem('userName') || '');

  useEffect(() => {
    localStorage.setItem('isAuthenticated', isAuthenticated);
    localStorage.setItem('userName', userName);
  }, [isAuthenticated, userName]);

  const handleLogin = (userName) => {
    setIsAuthenticated(true);
    setUserName(userName);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserName('');
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userName');
  };

  const PrivateRoute = ({ children }) => {
    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <Routes>
      <Route path="/" element={!isAuthenticated ? <Navigate to="/login" /> : <Navigate to="/home" />} />
      <Route path="/login" element={isAuthenticated ? <Navigate to="/home" /> : <Login onLogin={handleLogin} />} />
      <Route path="/register" element={isAuthenticated ? <Navigate to="/home" /> : <Register />} />

      <Route
        path="/home"
        element={
          <PrivateRoute>
            <HomePages onLogout={handleLogout}/>
          </PrivateRoute>
        }
      />
      <Route
        path="/category"
        element={
          <PrivateRoute>
            <CategoryPages onLogout={handleLogout} />
          </PrivateRoute>
        }
      />
      <Route
        path="/category/:id"
        element={
          <PrivateRoute>
            <CategoryRecipe onLogout={handleLogout} />
          </PrivateRoute>
        }
      />
      <Route
        path="/receta/:id"
        element={
          <PrivateRoute>
            <RecipeDetail onLogout={handleLogout} />
          </PrivateRoute>
        }
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
