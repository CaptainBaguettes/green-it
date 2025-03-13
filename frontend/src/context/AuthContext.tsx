import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AuthContextType {
    isAuthenticated: boolean;
    login: (token: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Utiliser uniquement authToken
        const token = localStorage.getItem('authToken');
        setIsAuthenticated(!!token);
    }, []);

    const login = (token: string) => {
        // Utiliser uniquement authToken
        localStorage.setItem('authToken', token);
        setIsAuthenticated(true);
    };

    const logout = () => {
        // Supprimer uniquement les clés nécessaires
        localStorage.removeItem('authToken');
        localStorage.removeItem('userId');
        localStorage.removeItem('userPreferences');
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};