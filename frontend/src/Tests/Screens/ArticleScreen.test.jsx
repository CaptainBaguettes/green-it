import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import ArticleScreen from "../../Screens/ArticleScreen";
import { describe, test, expect } from "vitest";

describe("ArticleScreen Component", () => {
    test("renders the ArticleScreen layout", () => {
        render(
            <MemoryRouter initialEntries={["/article/Transport"]}>
                <Routes>
                    <Route path="/article/:category" element={<ArticleScreen />} />
                </Routes>
            </MemoryRouter>
        );

        expect(screen.getByRole("banner")).toBeInTheDocument(); // Header
        expect(screen.getByRole("contentinfo")).toBeInTheDocument(); // Footer
    });
});
