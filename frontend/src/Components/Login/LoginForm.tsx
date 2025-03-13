import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const LoginForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        login('token');
        navigate('/home');
    };

    const handleSignup = () => {
        navigate('/signup');
    }

    return (
        <div className="flex column height align-center center">
            <form onSubmit={handleSubmit} className="flex column">
                <label htmlFor="email">Adresse e-mail
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
                <label htmlFor="password">Mot de passe
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Se connecter</button>
            </form>
            <a onClick={handleSignup}>Je n'ai pas de compte</a>
        </div>
    );
};

export default LoginForm;