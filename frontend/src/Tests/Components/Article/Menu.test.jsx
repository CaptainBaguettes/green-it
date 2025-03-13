import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Menu from "../../../Components/Article/Menu";

describe("Menu Component", () => {
    test("renders menu links correctly based on category", () => {
        const category = "Transport";

        render(
            <MemoryRouter initialEntries={[`/article/${category}`]}>
                <Routes>
                    <Route path="/article/:category" element={<Menu />} />
                </Routes>
            </MemoryRouter>
        );

        // Check if menu links exist with correct href attributes
        expect(screen.getByText("Découvrir")).toHaveAttribute("href", `/article/${category}/Découvrir`);
        expect(screen.getByText("Transiter")).toHaveAttribute("href", `/article/${category}/Transiter`);
        expect(screen.getByText("Agir")).toHaveAttribute("href", `/article/${category}/Agir`);
    });
});
