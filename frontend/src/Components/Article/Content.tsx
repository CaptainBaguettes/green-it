import { useParams } from "react-router-dom";

import transportImage from "../../Assets/Category/image3.webp";
import alimentationImage from "../../Assets/Category/image4.webp";
import vestimentaireImage from "../../Assets/Category/image5.webp";
import electroniqueImage from "../../Assets/Category/image6.webp";
import entretienImage from "../../Assets/Category/image7.webp";
import decouvrirImage from "../../Assets/SubCategory/image8.webp";
import transiterImage from "../../Assets/SubCategory/image9.webp";
import agirImage from "../../Assets/SubCategory/image10.webp";

const categoryImages = {
    Transport: transportImage,
    Alimentation: alimentationImage,
    Vestimentaire: vestimentaireImage,
    Electronique: electroniqueImage,
    Entretien: entretienImage
};

const subCategoryImages = {
    Découvrir: decouvrirImage,
    Transiter: transiterImage,
    Agir: agirImage
};


const text = ` It is a long established fact that a reader will be distracted by the readable
    content of a page when looking at its layout. The point of using Lorem Ipsum is
    that it has a more-or-less normal distribution of letters, as opposed to using
    'Content here, content here', making it look like readable English. Many desktop
    publishing packages and web page editors now use Lorem Ipsum as their default
    model text, and a search for 'lorem ipsum' will uncover many web sites still
    in their infancy. Various versions have evolved over the years, sometimes by
    accident, sometimes on purpose (injected humour and the like).`;

const Content = () => {
    const { category, subCategory } = useParams();
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <img src={categoryImages[category]} alt="" width="150" loading="lazy" />
                        </td>
                        <td>{category}</td>
                    </tr>
                    <tr>
                        <td>{text}</td>
                        <td>
                            <img src={subCategoryImages[subCategory]} alt="" width="150" loading="lazy" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Content;