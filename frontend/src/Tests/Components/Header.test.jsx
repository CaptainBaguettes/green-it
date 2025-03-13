import { describe, test, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "../../Components/Header";

describe("Header Component", () => {
    beforeEach(() => {
        vi.restoreAllMocks();
    });

    test("renders the navigation menu", () => {
        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        );

        expect(screen.getByText("Accueil")).toBeInTheDocument();
        expect(screen.getByRole("button", { name: "Param" })).toBeInTheDocument();
    });

});
