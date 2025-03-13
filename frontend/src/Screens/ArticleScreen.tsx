import { useParams } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Menu from "../Components/Article/Menu";
import Content from "../Components/Article/Content";

const ArticleScreen = () => {
    useParams();
    return (
        <div>
            <Header />
            <main>
                <Menu />
                <Content />
            </main>
            <Footer />
        </div>
    );
};

export default ArticleScreen;
