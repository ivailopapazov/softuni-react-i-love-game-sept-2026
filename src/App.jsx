import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Register from "./components/register/Register"
import { useState } from "react"
import { useNavigate } from "react-router"
import Home from "./components/home/Home"
import Catalog from "./components/catalog/Catalog"
import { Route, Routes } from "react-router"
import GameDetails from "./components/game-details/GameDetails"
import GameCreate from "./components/game-create/GameCreate"
import Login from "./components/login/Login"
import Logout from "./components/logout/Logout";
import GameEdit from "./components/game-edit/GameEdit"
import { authApi } from "./api"
import AuthContext from "./contexts/auth-context"
import usePersistedState from "./hooks/usePersistedState"

function App() {
    const navigate = useNavigate();

    const [auth, setAuth] = usePersistedState('auth', null);

    const register = async (userData) => {
        // Authenticate with supabase auth
        try {
            const result = await authApi.register(userData);

            setAuth(result);

            navigate("/");
        } catch (error) {
            alert(error.message);
        }
    };

    const login = async (userData) => {
        try {
            const result = await authApi.login(userData);

            setAuth(result);

            navigate("/");
        } catch (error) {
            alert(error.message);
        }
    };

    const logoutAction = async () => {
        try {
            await authApi.logout(auth?.access_token);

            setAuth(null);
        } catch (error) {
            alert(error.message);
        }
    };

    const contextValue = {
        accessToken: auth?.access_token,
        user: auth?.user,
        isAuthenticated: !!auth,
        register,
        login,
        logout: logoutAction,
    }

    return (
        <AuthContext.Provider value={contextValue}>
            <Header isAuthenticated={!!auth} />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/games/create" element={<GameCreate />} />
                <Route path="/games/:gameId" element={<GameDetails />} />
                <Route path="/games/:gameId/edit" element={<GameEdit />} />
                <Route path="/register" element={<Register onRegister={register} />} />
                <Route path="/login" element={<Login onLogin={login} />} />
                <Route path="/logout" element={<Logout />} />
            </Routes>

            <Footer />
        </AuthContext.Provider>
    )
}

export default App
