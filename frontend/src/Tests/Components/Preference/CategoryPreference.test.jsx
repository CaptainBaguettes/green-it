import { render, screen } from "@testing-library/react";
import CategoryPreference from "../../../Components/Preference/CategoryPreference";
import { describe, test, expect, vi } from "vitest";

describe("CategoryPreference Component", () => {
    test("renders the form correctly", () => {
        render(<CategoryPreference />);

        expect(screen.getByText("Select Your Preferences")).toBeInTheDocument();
    });
});
