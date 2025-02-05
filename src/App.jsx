import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeForm from "./components/RecipeForm";
import RecipeSummary from "./components/RecipeSummary";

function App() {
  return (
    <>
      <Router>
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
          <Routes>
            <Route path="/" element={<RecipeForm />} />
            <Route path="/summary" element={<RecipeSummary />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
