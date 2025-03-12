import { useParams } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Menu from "../Components/Article/Menu";

const ArticleScreen = () => {
    const { category } = useParams();
    console.log(category)
    return (
        <div>
            <Header />
            <main>
                <Menu />
            </main>
            <Footer />
        </div>
    );
};

export default ArticleScreen;
