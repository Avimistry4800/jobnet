import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice"
import "./App.css";
import Feed from "./Feed";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Login from "./Login";

function App() {
    const user = useSelector(selectUser);
    return (
        <div className="app">
            <Header />
            {!user? <Login /> : (
                <div className="app__body">
                <Sidebar />
                <Feed />
                {/* Widgets*/}
            </div>
            )}

            {/* App Body */}

        </div>
    );
}

export default App;
