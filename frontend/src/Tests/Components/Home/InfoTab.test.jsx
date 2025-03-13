import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import InfoTab from "../../../Components/Home/InfoTab";

describe("InfoTab Component", () => {
    test("renders title and text", () => {
        render(<InfoTab title="Test Title" text="Test Text" image="test.jpg" />);
        expect(screen.getByText("Test Title")).toBeInTheDocument();
        expect(screen.getByText("Test Text")).toBeInTheDocument();
    });

    test("renders the correct image", () => {
        render(<InfoTab title="Test Title" text="Test Text" image="test.jpg" />);
        const imgs = screen.getAllByAltText("Illustration Test Title");
        expect(imgs[0]).toBeInTheDocument();
        expect(imgs[0]).toHaveAttribute("src", "test.jpg");
    });
    
});
