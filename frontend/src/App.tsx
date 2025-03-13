import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ArticleScreen from "./Screens/ArticleScreen";
import HomeScreen from "./Screens/HomeScreen";
import PreferenceScreen from "./Screens/PreferenceScreen";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/article/:category/:subCategory" element={<ArticleScreen />} />
          < Route path="/preference" element={<PreferenceScreen />}  />
        </Routes>
      </Router>
    </>
  );
}

export default App;
