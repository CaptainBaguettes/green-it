const API_URL = "http://localhost:3000/api/users";

const AuthService = {
    login: async (email, password) => {
        const response = await fetch(`${API_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, pwd: password }) // Changé 'password' en 'pwd'
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || 'Échec de la connexion');
        }

        const data = await response.json();
        if (data.token) {
            localStorage.setItem('authToken', data.token);
            localStorage.setItem('userId', data.userId);
            return data;
        }
        throw new Error('Token manquant dans la réponse');
    },

    signup: async (email, password) => {
        const response = await fetch(`${API_URL}/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, pwd: password }) // Changé 'password' en 'pwd'
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || 'Échec de l\'inscription');
        }

        return await response.json();
    },

    logout: () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('userId');
    },

    getCurrentUser: () => {
        return {
            token: localStorage.getItem('authToken'),
            userId: localStorage.getItem('userId')
        };
    },

    isAuthenticated: () => {
        return !!localStorage.getItem('authToken');
    }
};

export default AuthService;
