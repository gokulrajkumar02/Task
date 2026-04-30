import { afterEach, describe, expect, it } from "vitest";

import { cleanup, render, screen } from "@testing-library/react";
import IpCard from "./IpCard";

afterEach(() => {
  cleanup();
});

const validIpData = {
  ip: "192.168.1.1",
  location: {
    lat: 12.1,
    lng: 23.2,
    city: "Chennai",
    region: "Tamil Nadu",
    country: "India",
    postalCode: "90210",
    timezone: "+05:30",
  },
  isp: "Airtel",
};

const emptyIpData = {
  ip: "",
  location: {
    lat: 12.1,
    lng: 23.2,
    city: "Chennai",
    region: "Tamil Nadu",
    country: "India",
    postalCode: "90210",
    timezone: "",
  },
  isp: "",
};
const whitespaceIpData = {
  ip: " ",
  location: {
    lat: 12.1,
    lng: 23.2,
    city: "Chennai",
    region: "Tamil Nadu",
    country: "India",
    postalCode: "90210",
    timezone: " ",
  },
  isp: " ",
};

describe("Testing IpCard", () => {
  it("renders staic label correctly", () => {
    render(<IpCard ipData={validIpData} />);

    const ipAddressLabel = screen.getByText("IP ADDRESS");
    expect(ipAddressLabel).toBeInTheDocument();

    const locationLabel = screen.getByText("LOCATION");
    expect(locationLabel).toBeInTheDocument();

    const timeZoneLabel = screen.getByText("TIMEZONE");
    expect(timeZoneLabel).toBeInTheDocument();

    const ipsLabel = screen.getByText("ISP");
    expect(ipsLabel).toBeInTheDocument();
  });

  it("renders value correctly", () => {
    render(<IpCard ipData={validIpData} />);

    const ipAddressValue = screen.getByText("192.168.1.1");
    expect(ipAddressValue).toBeInTheDocument();

    const ispValue = screen.getByText("Airtel");
    expect(ispValue).toBeInTheDocument();

    const locationValue = screen.getByText("Chennai, Tamil Nadu 90210");
    expect(locationValue).toBeInTheDocument();

    const timeZoneValue = screen.getByText("+05:30");
    expect(timeZoneValue).toBeInTheDocument();
  });

  it("renders the null correctly", () => {
    render(<IpCard ipData={emptyIpData} />);

    const ipAddressValue = screen.getByTestId("ip-value");
    expect(ipAddressValue).toHaveTextContent("--");

    const timeZoneValue = screen.getByTestId("timezone-value");
    expect(timeZoneValue).toHaveTextContent("--");

    const ispValue = screen.getByTestId("isp-value");
    expect(ispValue).toHaveTextContent("--");
  });

  it("renders N/A correctly", () => {
    render(<IpCard ipData={whitespaceIpData} />);

    const ipAddressValue = screen.getByTestId("ip-value");
    expect(ipAddressValue).toHaveTextContent("N/A");

    const timeZoneValue = screen.getByTestId("timezone-value");
    expect(timeZoneValue).toHaveTextContent("N/A");

    const ispValue = screen.getAllByTestId("isp-value");
    expect(ispValue[0]).toHaveTextContent("N/A");
  });
});
