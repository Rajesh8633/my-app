import { useState } from "react";
import "../../css/login.css";
import axios from "axios";

export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        try {
            const postData = {
                name: name,
                email: email,
                password: password,
            };

            // alert(JSON.stringify(postData));

            const response = await axios.post(
                "http://127.0.0.1:8000/api/register",
                postData
            );
            
            // const response = await axios.post(
            //     `${process.env.REACT_APP_API_BASE_URL}/api/register`,
            //     postData
            // );
            
            // alert("Registration Successful: " + JSON.stringify(response.data));
            console.log("Full response:", response);
        } catch (error) {
            // alert("Registration failed.");
            console.error(
                "Registration failed:",
                error.response?.data || error.message
            );
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h2 className="login-title">Create Account 📝</h2>
                <p className="login-subtitle">
                    Please fill in the details to register
                </p>
                <form onSubmit={handleRegister} className="login-form">
                    <div className="login-input-group">
                        <label className="login-label">Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="login-input"
                            placeholder="Your Name"
                        />
                    </div>
                    <div className="login-input-group">
                        <label className="login-label">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="login-input"
                            placeholder="you@example.com"
                        />
                    </div>
                    <div className="login-input-group">
                        <label className="login-label">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="login-input"
                            placeholder="Create a password"
                        />
                    </div>
                    <div className="login-input-group">
                        <label className="login-label">Confirm Password</label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            className="login-input"
                            placeholder="Repeat password"
                        />
                    </div>
                    <button type="submit" className="login-button">
                        Register
                    </button>
                </form>
                <p className="login-footer-text">
                    Already have an account?{" "}
                    <a href="/login" className="login-link">
                        Login
                    </a>
                </p>
            </div>
        </div>
    );
}
