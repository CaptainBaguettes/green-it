import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import AuthService from '../../Services/AuthService';
import ToastComponent from '../Toast/ToastComponent';

const LoginForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showToast, setShowToast] = useState(false);
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const response = await AuthService.login(email, password);
            login(response.token);
            navigate('/home');
        } catch (err) {
            setError('Échec de la connexion');
            setShowToast(true);
            setTimeout(() => setShowToast(false), 3000);
        }
    };

    const handleSignup = () => {
        navigate('/signup');
    }

    return (
        <div className="flex column height align-center center">
            {showToast && <ToastComponent message={error} type="danger" />}
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