import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Register } from "./pages/register/Register";
import { Login } from "./pages/login/Login";
import { Header } from "./components/header/Header";
import { AuthProvider, MyContext } from "./context/MyContext";
import { ProtectedRoutes } from "./utils/ProtectedRoutes";
import Profile from "./pages/profile/Profile";
import { ToastContainer, toast } from "react-toastify";
import AddProduct from "./pages/add-product/AddProduct";
import Users from "./pages/users/Users";
import Shop from "./pages/shop/Shop";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/shop" element={<Shop />} />

            <Route path="/users-list" element={<Users />} />
          </Route>
        </Routes>
      </AuthProvider>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
