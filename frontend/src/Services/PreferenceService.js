const API_URL = "http://localhost:3000/api/users/prefs";
const LOCAL_STORAGE_KEY = "userPreferences";

const getAuthToken = () => {
    return localStorage.getItem("authToken");
};

const PreferenceService = {
    /**
     * Fetch preferences from the API
     * @param {string} userId
     * @returns {Promise<string[]>} - Array of selected preferences
     */
    getPreferencesFromAPI: async (userId) => {
        try {
            const token = getAuthToken();
            if (!token) throw new Error("No authentication token found");
            if (!userId) throw new Error("User ID is required");

            const response = await fetch(`${API_URL}/${userId}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });

            if (!response.ok) throw new Error("Failed to fetch preferences");

            const data = await response.json();
            return Array.isArray(data.prefs) ? data.prefs : [];
        } catch (error) {
            console.error("Error fetching preferences:", error);
            throw error;
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
            const token = getAuthToken();
            if (!token) throw new Error("No authentication token found");
            if (!userId) throw new Error("User ID is required");

            // Retrieve preferences from local storage
            const selectedCategories = PreferenceService.getPreferencesFromLocalStorage();

            const response = await fetch(`${API_URL}/${userId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({ prefs: selectedCategories })
            });

            if (!response.ok) throw new Error("Failed to update preferences in API");

            return await response.json();
        } catch (error) {
            console.error("Error updating preferences in API:", error);
            throw error;
        }
    }
};

export default PreferenceService;
