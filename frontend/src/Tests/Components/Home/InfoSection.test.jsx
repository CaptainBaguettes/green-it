import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import InfoSection from "../../../Components/Home/InfoSection";

describe("InfoSection Component", () => {
    test("renders information title", () => {
        render(<InfoSection />);
        expect(screen.getByText("Informations")).toBeInTheDocument();
    });

    test("renders all InfoTab components", () => {
        render(<InfoSection />);
        expect(screen.getAllByText("Section 1").length).toBeGreaterThan(0);
        expect(screen.getAllByText("Section 2").length).toBeGreaterThan(0);
        expect(screen.getAllByText("Section 3").length).toBeGreaterThan(0);
    });
    
});
