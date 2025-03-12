import { Link, useParams } from "react-router-dom";

const Menu = () => {
    const { category } = useParams();
    
    return (
        <menu>
            <li><Link to={`/article/${category}/Découvrir`}>Découvrir</Link></li>
            <li><Link to={`/article/${category}/Transiter`}>Transiter</Link></li>
            <li><Link to={`/article/${category}/Agir`}>Agir</Link></li>
        </menu>
    );
};

export default Menu;