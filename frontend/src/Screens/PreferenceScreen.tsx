import Header from "../Components/Header";
import Footer from "../Components/Footer";
import CategoryPreference from "../Components/Preference/CategoryPreference";
import AuthService from "../Services/AuthService";

const PreferenceScreen = () => {
    const { userId } = AuthService.getCurrentUser();

    return (
        <div>
            <Header />
            <main>
                <CategoryPreference showSubmitButton={true} userId={userId} />
            </main>
            <Footer />
        </div>
    );
};

export default PreferenceScreen;
