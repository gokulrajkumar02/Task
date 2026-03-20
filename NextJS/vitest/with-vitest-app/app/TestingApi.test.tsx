import { describe, expect, it, vi } from "vitest";
import { fetchUser } from "./fetchUser";

describe("Api test",() => {
  it("return user data", async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ id: 1, name: "Gokul" }),
      } as Response),
    );

    const data = await fetchUser()
    expect(fetch).toHaveBeenCalledOnce()
    expect(data).toEqual({ id: 1, name: "Gokul" })

  });
});


