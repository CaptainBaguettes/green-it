import Header from "../Components/Header";
import Carousel from "../Components/Home/Carousel";
import Footer from "../Components/Footer";
import HelloUser from "../Components/Home/HelloUser";

const HomeScreen = () => (
    <div>
        <Header />
        <main>
            <HelloUser/>
            <Carousel />
        </main>
        <Footer />
    </div>
);

export default HomeScreen;
