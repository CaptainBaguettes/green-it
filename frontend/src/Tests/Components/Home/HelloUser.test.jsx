import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import HelloUser from "../../../Components/Home/HelloUser";

describe("HelloUser Component", () => {
    test("renders the hello user message", () => {
        render(<HelloUser />);
        expect(screen.getByText("Hello !")).toBeInTheDocument();
    });
});
