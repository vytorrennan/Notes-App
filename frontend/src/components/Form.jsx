import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import "../index.css"
import LoadingIndicator from "./LoadingIndicator";



function Form({ route, method }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const name = method === "login" ? "Login" : "Register";
    const reverseName = method === "login" ? "Register" : "Login";
    const reverseUrl = method === "login" ? "/register" : "/login"

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();

        try {
            const res = await api.post(route, { username, password })
            if (method === "login") {
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
                navigate("/")
                location.reload();
            } else {
                navigate("/login")
            }
        } catch (error) {
            alert(error)
        } finally {
            setLoading(false)
        }
    };

    let elementsToBeRemoved = document.getElementsByClassName("formRemove")
    for (let i = 0; i < elementsToBeRemoved.length; i++) {
        elementsToBeRemoved[i].remove();
    }

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <h1>{name}</h1>
            <div className="d-flex flex-column gap-3 mb-3">
                <input
                    className="form-input"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                />
                <input
                    className="form-input"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
            </div>
            {loading && <LoadingIndicator />}
            <button className="form-button btn btn-primary mb-2" type="submit">
                {name}
            </button>
            <a href={reverseUrl} className="link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover pt-5">Go to {reverseName}</a>
        </form>
    );
}

export default Form
