// Pre-programmed tsunami zones

import type { Scenario } from "../simulation/types";

export const scenarios: Scenario[] = [
  {
    id: "normal",
    name: "Normal Conditions",
    description: "No active tsunami",
    floodedLocations: [],
    closedRoads: [],
    refugeOccupancy: {},
  },
  {
    id: "west",
    name: "Western Inundation",
    description: "Western coastal areas are affected",
    floodedLocations: ["I", "J"],
    closedRoads: [],
    refugeOccupancy: {},
  },
  {
    id: "south",
    name: "Southern Inundation",
    description: "Southern coastal areas are affected",
    floodedLocations: ["N", "O", "P"],
    closedRoads: [],
    refugeOccupancy: {},
  },
  {
    id: "east",
    name: "Eastern Inundation",
    description: "Eastern coastal areas are affected",
    floodedLocations: ["B", "F", "M"],
    closedRoads: [],
    refugeOccupancy: {},
  },
  {
    // Example; use road ids from GraphData.tsx
    id: "road-closure",
    name: "Road Closure (example)",
    description: "No inundation, but the road between C and E is closed",
    floodedLocations: [],
    closedRoads: ["C-E"],
    refugeOccupancy: {},
  },
];
