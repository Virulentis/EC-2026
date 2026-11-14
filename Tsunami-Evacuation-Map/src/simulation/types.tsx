
// Safe points
export type NodeId =
  | "A" | "B" | "C" | "D"
  | "E" | "F" | "G" | "H"
  | "I" | "J" | "K" | "L"
  | "M" | "N" | "O" | "P";

// Road junctions 
export type JunctionId = "J1" | "J2" | "J3" | "J4";

// Anything that can be an end of a road.
export type GraphNodeId = NodeId | JunctionId;

// A point on the map
export interface MapNode {
  id: GraphNodeId;
  x: number;
  y: number;
  isRefuge: boolean;
}

// A bi-directional road. "weight" is the distance shown on the map
export interface Edge {
  id: string; // ex. "C-E". Scenarios use this to close a road.
  from: GraphNodeId;
  to: GraphNodeId;
  weight: number;
}

export interface Refuge {
  id: NodeId;
  elevation: number;
  capacity: number;
  occupancy: number;
}

export interface Scenario {
  id: string;
  name: string;
  description: string;

  // points inside the tsunami hazard zone
  floodedLocations: NodeId[]; 

  // Edge ids from data/GraphData.tsx
  closedRoads: string[]; 
  refugeOccupancy: Partial<Record<NodeId, number>>;
}
