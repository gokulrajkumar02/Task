
"use client"
import { DistrictProvider } from "@/Context/DistrictContext";
import StoryFeatures from "@/Component/StoryFeatures";

export default function StoryFeaturePage() {
  return (
    <DistrictProvider>
      <StoryFeatures />
    </DistrictProvider>
  );
}