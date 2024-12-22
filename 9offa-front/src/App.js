import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/home/HomePage";
import { RegisterPage } from "./pages/register/RegisterPage";
import { LoginPage } from "./pages/login/LoginPage";
import { Header } from "./components/header/Header";
import { AuthProvider, MyContext } from "./context/MyContext";
import { ProtectedRoutes } from "./utils/ProtectedRoutes";
import { ProfilePage } from "./pages/profile/ProfilePage";
import { ToastContainer, toast } from "react-toastify";
import { AddProductPage } from "./pages/add-product/AddProductPage";
import Users, { UsersPage } from "./pages/users/UsersPage";
import { ShopPage } from "./pages/shop/ShopPage";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/profile/:id" element={<ProfilePage />} />
            <Route path="/add-product" element={<AddProductPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/users-list" element={<UsersPage />} />
          </Route>
        </Routes>
      </AuthProvider>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
