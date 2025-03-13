import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "../../Components/Footer";

describe("Footer Component", () => {
    test("renders the footer text", () => {
        render(<Footer />);
        expect(screen.getByText("© 2025 - Déclaration des différents éléments")).toBeInTheDocument();
    });
});
