import { describe, test, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Carousel from "../../../Components/Home/Carousel";

describe("Carousel Component", () => {
    test("renders the first image by default", () => {
        render(<Carousel />);
        const img = screen.getByAltText("Présentation");
        expect(img).toBeInTheDocument();
        expect(img).toHaveAttribute("src", expect.stringContaining("image1.png"));
    });
});
