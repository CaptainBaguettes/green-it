import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import PreferenceScreen from "../../Screens/PreferenceScreen";
import { describe, test, expect } from "vitest";

describe("PreferenceScreen Component", () => {
    test("renders the PreferenceScreen layout", () => {
        render(
            <MemoryRouter>
                <PreferenceScreen />
            </MemoryRouter>
        );

        expect(screen.getByRole("banner")).toBeInTheDocument(); 
        expect(screen.getByRole("contentinfo")).toBeInTheDocument(); 
        expect(screen.getByText("Select Your Preferences")).toBeInTheDocument(); 
    });
});
