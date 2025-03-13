import Header from "../Components/Header";
import Footer from "../Components/Footer";
import CategoryPreference from "../Components/Preference/CategoryPreference";

const PreferenceScreen = () => (
    <div>
        <Header />
        <main>
            <CategoryPreference/>
        </main>
        <Footer />
    </div>
);

export default PreferenceScreen;
