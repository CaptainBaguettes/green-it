import React, { useState } from 'react';
import ToastComponent from '../Toast/ToastComponent';
import { useNavigate } from 'react-router-dom';

const SignupForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showToast, setShowToast] = useState(false);
    const navigate = useNavigate();

    const handleSignup = (e: React.FormEvent) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            console.log('Passwords do not match');
            setShowToast(true);

            setTimeout(() => {
                setShowToast(false);
            }, 3000);
        }
    };

    const handleLogin = () => {
        navigate('/login');
    }

    return (
        <div className="flex column height align-center center">
            {showToast && <ToastComponent message="Passwords do not match" type='danger' />}
            <form onSubmit={handleSignup} className="flex column">
                <label>Adresse e-mail
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
                <label>Mot de passe
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>

                <label>Confirmation du mot de passe
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">S'inscrire</button>
            </form>
            <a onClick={handleLogin}>J'ai déjà un compte</a>
        </div>
    );
};

export default SignupForm;