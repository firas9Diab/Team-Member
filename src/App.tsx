import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import { useLocation } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoutes";
import Settings from "./components/Settings/Settings";
import Categories from "./components/Categories/Categories";
import Footer from "./components/Footer/Footer";
import ItemCards from "./components/ItemCards/ItemCards";
import Products from "./components/Products/Products";

const App = () => {
  const location = useLocation();

  const hideNavbar =
    location.pathname === "/sign" || location.pathname === "/login";

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />
        <Route
          path="/categories"
          element={
            <ProtectedRoute>
              <Categories categories={[]} />
            </ProtectedRoute>
          }
        />

        <Route
          path="/ItemCards"
          element={
            <ProtectedRoute>
              <ItemCards todaysDeals={[]} moreItems={[]} />
            </ProtectedRoute>
          }
        />

        <Route
          path="/Products"
          element={
            <ProtectedRoute>
              <Products search={""} />
            </ProtectedRoute>
          }
        />

        <Route
          path="/Footer"
          element={
            <ProtectedRoute>
              <Footer />
            </ProtectedRoute>
          }
        />

        <Route path="/sign" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
