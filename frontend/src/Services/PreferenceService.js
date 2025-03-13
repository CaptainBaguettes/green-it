const API_URL = "http://localhost:3000/api/users/prefs"; // Base URL for API requests
const DEFAULT_TOKEN = "your-default-token"; // Replace with your default token
const LOCAL_STORAGE_KEY = "userPreferences";

const getAuthToken = () => {
    return localStorage.getItem("authToken") || DEFAULT_TOKEN;
};

const PreferenceService = {
    /**
     * Fetch preferences from the API
     * @param {string} userId
     * @returns {Promise<string[]>} - Array of selected preferences
     */
    getPreferencesFromAPI: async (userId) => {
        try {
            if (!userId) throw new Error("User ID is required");

            const response = await fetch(`${API_URL}/${userId}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${getAuthToken()}`
                }
            });

            if (!response.ok) throw new Error("Failed to fetch preferences");

            const data = await response.json();
            return Array.isArray(data.prefs) ? data.prefs : [];
        } catch (error) {
            console.error("Error fetching preferences:", error);
            return [];
        }
    },

    /**
     * Get preferences from local storage
     * @returns {string[]} - Array of selected preferences
     */
    getPreferencesFromLocalStorage: () => {
        try {
            const storedPrefs = localStorage.getItem(LOCAL_STORAGE_KEY);
            return storedPrefs ? JSON.parse(storedPrefs) : [];
        } catch (error) {
            console.error("Error retrieving preferences from local storage:", error);
            return [];
        }
    },

    /**
     * Update preferences in local storage
     * @param {string[]} selectedCategories
     */
    updatePreferencesInLocalStorage: (selectedCategories) => {
        try {
            if (!Array.isArray(selectedCategories)) throw new Error("Invalid data format");
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(selectedCategories));
            console.log("Updated preferences in local storage:", selectedCategories);
        } catch (error) {
            console.error("Error updating preferences in local storage:", error);
        }
    },

    /**
     * Update preferences in the API using the value from local storage
     * @param {string} userId
     */
    updatePreferencesInAPI: async (userId) => {
        try {
            if (!userId) throw new Error("User ID is required");

            // Retrieve preferences from local storage
            const selectedCategories = PreferenceService.getPreferencesFromLocalStorage();

            const response = await fetch(`${API_URL}/${userId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${getAuthToken()}`
                },
                body: JSON.stringify({ prefs: selectedCategories })
            });

            if (!response.ok) throw new Error("Failed to update preferences in API");

            console.log("Updated preferences in API:", await response.json());
        } catch (error) {
            console.error("Error updating preferences in API:", error);
        }
    }
};

export default PreferenceService;
