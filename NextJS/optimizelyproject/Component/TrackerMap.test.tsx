import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import TrackerMap from "./TrackerMap";

vi.mock("react-leaflet", () => ({
  MapContainer: ({ children }: any) => <div data-testid="map-container">{children}</div>,
  TileLayer: () => <div />,
  Marker: ({ position }: any) => <div data-testid="marker" data-lat={position[0]} data-lng={position[1]} />,
}));

describe("TrackerMap", () => {
  it("renders map with correct coordinates", () => {
    render(<TrackerMap lat={12.1} lng={23.2} />);
    const mapContainer = screen.getByTestId("map-container")
    expect(mapContainer).toBeInTheDocument();

    const marker = screen.getByTestId("marker");
    expect(marker).toHaveAttribute("data-lat", "12.1");
    expect(marker).toHaveAttribute("data-lng", "23.2");
  });
});