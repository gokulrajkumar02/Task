import { describe, expect, it , vi } from "vitest";
import authMiddleware from "./middleware"

describe("testing useState", () => { 
  it("Auth user", async () => {
      const mockFun = vi.fn()
      const mock = authMiddleware(mockFun)
      mock({isAuthenticated:true})
      expect(mockFun).toHaveBeenCalled();
  });
  it("should throw when not authenticated", () => {
  const mockNext = vi.fn();
  const middleware = authMiddleware(mockNext);

  expect(() => middleware({ isAuthenticated: false }))
    .toThrow("Unauthorized");
});
});