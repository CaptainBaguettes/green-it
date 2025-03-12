import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ArticleScreen from "./Screens/ArticleScreen";
import HomeScreen from "./Screens/HomeScreen";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/article/:category/:subCategory" element={<ArticleScreen />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
