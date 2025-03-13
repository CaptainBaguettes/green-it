import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PreferenceService from "../Services/PreferenceService";

const categories = ["Transport", "Alimentation", "Vestimentaire", "Electronique", "Entretien"];

const Header = () => {
    const [enabledCategories, setEnabledCategories] = useState<string[]>([]);

    // Load preferences from local storage when the component mounts
    useEffect(() => {
        setEnabledCategories(PreferenceService.getPreferencesFromLocalStorage());
    }, []);

    return (
        <header>
            <menu>
                <li><Link to="/home">Accueil</Link></li>
                
                {categories.map((category) => 
                    enabledCategories.includes(category) && (
                        <li key={category}>
                            <Link to={`/article/${category}/Découvrir`}>{category}</Link>
                        </li>
                    )
                )}

                <li><Link to="/preference"><button>Param</button></Link></li>
            </menu>
        </header>
    );
};

export default Header;
