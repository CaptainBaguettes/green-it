import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PreferenceService from "../Services/PreferenceService";
import { useAuth } from '../context/AuthContext';

const categories = ["Transport", "Alimentation", "Vestimentaire", "Electronique", "Entretien"];

const Header = () => {
    const [enabledCategories, setEnabledCategories] = useState<string[]>([]);
    const navigate = useNavigate();
    const { logout } = useAuth();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    useEffect(() => {
        setEnabledCategories(PreferenceService.getPreferencesFromLocalStorage());
    }, []);

    return (
        <header>
            <menu className="flex space-between align-center">
                <li><Link to="/home">Accueil</Link></li>

                {categories.map((category) =>
                    enabledCategories.includes(category) && (
                        <li key={category}>
                            <Link to={`/article/${category}/Découvrir`}>{category}</Link>
                        </li>
                    )
                )}
                <div>
                    <Link to="/preference"><button>Param</button></Link>
                    <button
                        onClick={handleLogout}
                        className="danger"
                    >
                        Se déconnecter
                    </button>
                </div>
            </menu>
        </header>
    );
};

export default Header;
