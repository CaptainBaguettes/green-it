import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Content from "../../../Components/Article/Content";

describe("Content Component", () => {
    test("renders category and subcategory images correctly", () => {
        const category = "Transport";
        const subCategory = "Découvrir";

        render(
            <MemoryRouter initialEntries={[`/${category}/${subCategory}`]}>
                <Routes>
                    <Route path="/:category/:subCategory" element={<Content />} />
                </Routes>
            </MemoryRouter>
        );

        const categoryImage = screen.getByAltText(category);
        expect(categoryImage).toBeInTheDocument();
        expect(categoryImage).toHaveAttribute("src", expect.stringContaining("image3.png"));

        const subCategoryImage = screen.getByAltText(subCategory);
        expect(subCategoryImage).toBeInTheDocument();
        expect(subCategoryImage).toHaveAttribute("src", expect.stringContaining("image8.png"));

        expect(screen.getByText(category)).toBeInTheDocument();
    });
});
