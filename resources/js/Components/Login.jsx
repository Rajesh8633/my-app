import { useState } from 'react';
import '../../css/login.css'; // adjust path as needed

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('Login:', { email, password });
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h2 className="login-title">Welcome Back 👋</h2>
                <p className="login-subtitle">Please login to your account</p>
                <form onSubmit={handleLogin} className="login-form">
                    <div className="login-input-group">
                        <label className="login-label">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
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
                            onChange={e => setPassword(e.target.value)}
                            required
                            className="login-input"
                            placeholder="Enter your password"
                        />
                    </div>
                    <button type="submit" className="login-button">Login</button>
                </form>
                <p className="login-footer-text">
                    Don't have an account? <a href="/register" className="login-link">Register</a>
                </p>
            </div>
        </div>
    );
}
