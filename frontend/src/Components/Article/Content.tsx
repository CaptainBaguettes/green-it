import { useParams } from "react-router-dom";

// Import images for categories
import transportImage from "../../Assets/Category/image3.png";
import alimentationImage from "../../Assets/Category/image4.png";
import vestimentaireImage from "../../Assets/Category/image5.png";
import electroniqueImage from "../../Assets/Category/image6.png";
import entretienImage from "../../Assets/Category/image7.png";

// Import images for subcategories
import decouvrirImage from "../../Assets/SubCategory/image8.png";
import transiterImage from "../../Assets/SubCategory/image9.png";
import agirImage from "../../Assets/SubCategory/image10.png";
    
// Category images mapping
const categoryImages = {
    Transport: transportImage,
    Alimentation: alimentationImage,
    Vestimentaire: vestimentaireImage,
    Electronique: electroniqueImage,
    Entretien: entretienImage
};

// Subcategory images mapping
const subCategoryImages = {
    Découvrir: decouvrirImage,
    Transiter: transiterImage,
    Agir: agirImage
};

const Content = () => {
    const { category, subCategory } = useParams();

    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <img src={categoryImages[category]} alt={category} width="100" loading="lazy" />
                        </td>
                        <td>{category}</td>
                    </tr>
                    <tr>
                        <td>{subCategory}</td>
                        <td>
                            <img src={subCategoryImages[subCategory]} alt={subCategory} width="100" loading="lazy" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Content;