import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/react";
import * as PageStories from "./Page.stories";
import { describe, it } from "node:test";
import { expect } from "storybook/test";
import userEvent from "@testing-library/user-event";

const {LoggedIn,LoggedOut}  = composeStories(PageStories);

describe("Testing PageTest", () => {
  it("Test render", async () => {
    render(<LoggedIn />);

    const loginButton = screen.getByText("Log in");
    expect(loginButton).toBeInTheDocument();
    await userEvent.click(loginButton);
    await expect(loginButton).not.toBeInTheDocument();

    const logoutButton = screen.getByText("Log out");
    expect(logoutButton).toBeInTheDocument();
  });
});
