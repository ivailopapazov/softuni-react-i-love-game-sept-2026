import { Route, Routes } from "react-router"

import { AuthProvider } from "./contexts/auth-context"
import { ToastContainer } from "react-toastify"

import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Register from "./components/register/Register"
import Home from "./components/home/Home"
import Catalog from "./components/catalog/Catalog"
import GameDetails from "./components/game-details/GameDetails"
import GameCreate from "./components/game-create/GameCreate"
import Login from "./components/login/Login"
import Profile from "./components/profile/Profile"
import Logout from "./components/logout/Logout";
import GameEdit from "./components/game-edit/GameEdit"

function App() {
    return (
        <AuthProvider>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/games/create" element={<GameCreate />} />
                <Route path="/games/:gameId" element={<GameDetails />} />
                <Route path="/games/:gameId/edit" element={<GameEdit />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>

            <ToastContainer  />

            <Footer />
        </AuthProvider>
    )
}

export default App
