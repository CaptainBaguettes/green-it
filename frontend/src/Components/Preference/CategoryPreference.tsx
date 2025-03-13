import { useEffect, useState } from "react";
import PreferenceService from "../../Services/PreferenceService";

const categories = ["Transport", "Alimentation", "Vestimentaire", "Electronique", "Entretien"];
const userId = "123"; // Replace with actual user ID

const CategoryPreference = () => {
    const [preferences, setPreferences] = useState<{ [key: string]: boolean }>(
        categories.reduce((acc, category) => ({ ...acc, [category]: false }), {})
    );

    // Load preferences from local storage when the component mounts
    useEffect(() => {
        const storedPrefs = PreferenceService.getPreferencesFromLocalStorage();
        if (storedPrefs.length > 0) {
            const updatedPreferences = categories.reduce((acc, category) => ({
                ...acc,
                [category]: storedPrefs.includes(category),
            }), {});
            setPreferences(updatedPreferences);
        }
    }, []);

    const handleChange = (event: { target: { name: string; checked: boolean } }) => {
        const { name, checked } = event.target;
        setPreferences((prev) => ({ ...prev, [name]: checked }));
    };

    const handleSubmit = async (event: { preventDefault: () => void }) => {
        event.preventDefault();

        // Convert preferences to an array of selected categories
        const selectedPreferences = Object.keys(preferences).filter(category => preferences[category]);

        // Update local storage
        PreferenceService.updatePreferencesInLocalStorage(selectedPreferences);

        // Send the updated preferences to the API
        await PreferenceService.updatePreferencesInAPI(userId);

        console.log("Preferences saved:", selectedPreferences);
    };

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Select Your Preferences</legend>
                {categories.map((category) => (
                    <label key={category} style={{ display: "block", margin: "5px 0" }}>
                        <input
                            type="checkbox"
                            name={category}
                            checked={preferences[category]}
                            onChange={handleChange}
                        />
                        {category}
                    </label>
                ))}
            </fieldset>
            <button type="submit">Submit</button>
        </form>
    );
};

export default CategoryPreference;
