import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import HomeScreen from "../../Screens/HomeScreen";
import { describe, test, expect } from "vitest";

describe("HomeScreen Component", () => {
    test("renders the HomeScreen layout", () => {
        render(
            <MemoryRouter>
                <HomeScreen />
            </MemoryRouter>
        );

        expect(screen.getByRole("banner")).toBeInTheDocument(); 
        expect(screen.getByRole("contentinfo")).toBeInTheDocument(); 
        expect(screen.getByText("Hello !")).toBeInTheDocument(); 
    });
});
