import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { SocketContextProvider } from "./utils/socketContext";
import { AuthContextProvider } from "./utils/authContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <AuthContextProvider>
        <SocketContextProvider>
            <App />
        </SocketContextProvider>
    </AuthContextProvider>
);
