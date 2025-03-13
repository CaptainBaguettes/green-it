import { useEffect, useState } from "react";
import PreferenceService from "../../Services/PreferenceService";
import { useNavigate } from "react-router-dom";

const categories = ['Transport', 'Alimentation', 'Vestimentaire', 'Electronique', 'Entretien']; // Mise à jour de la casse

interface CategoryPreferenceProps {
    showSubmitButton?: boolean;
    onPreferencesChange?: (preferences: string[]) => void;
    userId?: string;
}

const CategoryPreference = ({ showSubmitButton = false, onPreferencesChange, userId }: CategoryPreferenceProps) => {
    const [preferences, setPreferences] = useState<{ [key: string]: boolean }>(
        categories.reduce((acc, category) => ({ ...acc, [category]: false }), {})
    );
    const navigate = useNavigate();

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
        const newPreferences = { ...preferences, [name]: checked };
        setPreferences(newPreferences);

        // Notifier le parent des changements
        if (onPreferencesChange) {
            const selectedPreferences = Object.keys(newPreferences).filter(category => newPreferences[category]);
            onPreferencesChange(selectedPreferences);
        }
    };

    const handleSubmit = async (event: { preventDefault: () => void }) => {
        event.preventDefault();
        const selectedPreferences = Object.keys(preferences).filter(category => preferences[category]);
        PreferenceService.updatePreferencesInLocalStorage(selectedPreferences);

        if (userId) {
            await PreferenceService.updatePreferencesInAPI(userId);
            navigate('/home');
        }
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
            {showSubmitButton && <button type="submit">Submit</button>}
        </form>
    );
};

export default CategoryPreference;
