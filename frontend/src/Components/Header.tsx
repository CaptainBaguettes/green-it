import { Link } from "react-router-dom";

const Header = () => (
    <header>
        <menu>
            <li><Link to="/home">Accueil</Link></li>
            <li><Link to="/article/Transport">Transport</Link></li>
            <li><Link to="/article/Alimentation">Alimentation</Link></li>
            <li><Link to="/article/Vestimentaire">Vestimentaire</Link></li>
            <li><Link to="/article/Electronique">Electronique</Link></li>
            <li><Link to="/article/Entretien">Entretien</Link></li>
            <li><button>Param</button></li>
        </menu>
    </header>
);

export default Header;
