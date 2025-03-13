import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ToastComponent from '../Toast/ToastComponent';
import CategoryPreference from '../Preference/CategoryPreference';
import AuthService from '../../Services/AuthService';
import PreferenceService from '../../Services/PreferenceService';
import { useAuth } from '../../context/AuthContext';

const SignupForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showToast, setShowToast] = useState(false);
    const [selectedPreferences, setSelectedPreferences] = useState<string[]>([]);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Les mots de passe ne correspondent pas');
            setShowToast(true);
            setTimeout(() => setShowToast(false), 3000);
            return;
        }

        try {
            // 1. Créer le compte
            const signupResponse = await AuthService.signup(email, password);

            // 2. Se connecter automatiquement
            const loginResponse = await AuthService.login(email, password);
            login(loginResponse.token);

            // 3. Sauvegarder les préférences
            if (selectedPreferences.length > 0) {
                await PreferenceService.updatePreferencesInAPI(loginResponse.userId);
            }

            // 4. Rediriger vers la page d'accueil
            navigate('/home');
        } catch (err) {
            setError('Échec de l\'inscription');
            setShowToast(true);
            setTimeout(() => setShowToast(false), 3000);
        }
    };

    const handleLogin = () => {
        navigate('/login');
    }

    return (
        <div className="flex column height align-center center">
            {showToast && <ToastComponent message={error} type="danger" />}
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
                <CategoryPreference
                    showSubmitButton={false}
                    onPreferencesChange={setSelectedPreferences}
                />
                <button type="submit">S'inscrire</button>
            </form>
            <a onClick={handleLogin}>J'ai déjà un compte</a>
        </div>
    );
};

export default SignupForm;