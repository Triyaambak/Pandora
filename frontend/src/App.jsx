import Home from "./Components/Home";
import Register from "./Components/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAuthContext } from "./utils/authContext";
import { useEffect } from "react";

const App = () => {
    const { authUser } = useAuthContext();
    useEffect(() => {
        const cleanup = () => {
            localStorage.removeItem("token");
        };

        window.addEventListener("beforeunload", cleanup);

        return () => {
            window.removeEventListener("beforeunload", cleanup);
        };
    }, []);
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/register"
                    element={<Register />}
                />
                <Route
                    path="/"
                    element={<Home />}
                />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
