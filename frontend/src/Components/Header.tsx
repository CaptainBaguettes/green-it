import { Link } from "react-router-dom";

const Header = () => (
    <header>
        <menu>
            <li><Link to="/home">Accueil</Link></li>
            <li><Link to="/article/Transport/Découvrir">Transport</Link></li>
            <li><Link to="/article/Alimentation/Découvrir">Alimentation</Link></li>
            <li><Link to="/article/Vestimentaire/Découvrir">Vestimentaire</Link></li>
            <li><Link to="/article/Electronique/Découvrir">Electronique</Link></li>
            <li><Link to="/article/Entretien/Découvrir">Entretien</Link></li>
            <li><button>Param</button></li>
        </menu>
    </header>
);

export default Header;
