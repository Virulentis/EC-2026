// Road network read from src/assets/evacuation-map.jpeg.
/**
 * Positions use a 886 x 1370 space that matches the image's aspect ratio, 
 * so overlay with <svg viewBox="0 0 886 1370"> on top of the map.
 * 
 * A-P are starting points and possible destinations (safe points)
 * J1-J4 are unlabelled junctions where roads meet or cross. They are not 
 * safe points so they must never be recommended as a destination.
 */


import type { Edge, GraphNodeId, MapNode } from "../simulation/types";

export const MAP_WIDTH = 886;
export const MAP_HEIGHT = 1370;

export const nodes: MapNode[] = [
  { id: "A", x: 261, y: 155, isRefuge: true },
  { id: "B", x: 361, y: 295, isRefuge: true },
  { id: "C", x: 261, y: 465, isRefuge: true },
  { id: "D", x: 355, y: 465, isRefuge: true },
  { id: "E", x: 261, y: 640, isRefuge: true },
  { id: "F", x: 445, y: 640, isRefuge: true },
  { id: "G", x: 261, y: 797, isRefuge: true },
  { id: "H", x: 445, y: 797, isRefuge: true },
  { id: "I", x: 85, y: 797, isRefuge: true },
  { id: "J", x: 85, y: 1002, isRefuge: true },
  { id: "K", x: 261, y: 1002, isRefuge: true },
  { id: "L", x: 445, y: 1002, isRefuge: true },
  { id: "M", x: 595, y: 1002, isRefuge: true },
  { id: "N", x: 445, y: 1150, isRefuge: true },
  { id: "O", x: 595, y: 1150, isRefuge: true },
  { id: "P", x: 597, y: 1303, isRefuge: true },
  { id: "J1", x: 261, y: 295, isRefuge: false },
  { id: "J2", x: 355, y: 640, isRefuge: false },
  { id: "J3", x: 355, y: 797, isRefuge: false },
  { id: "J4", x: 355, y: 1002, isRefuge: false },
];

// Builds a road. Every road is bi-directional
const road = (from: GraphNodeId, to: GraphNodeId, weight: number): Edge => ({
  id: `${from}-${to}`,
  from,
  to,
  weight,
});


export const edges: Edge[] = [
  // Western spine
  road("A", "J1", 1),
  road("J1", "B", 0.5),
  road("J1", "C", 2),
  road("B", "C", 1.5),
  road("C", "D", 0.5),
  road("C", "E", 1),
  road("E", "G", 4),
  road("G", "K", 5),

  road("D", "J2", 3),
  road("J2", "J3", 2),
  road("J3", "J4", 4),

  road("E", "J2", 2),
  road("J2", "F", 1),

  road("G", "J3", 2),
  road("J3", "H", 1),

  road("F", "H", 2),
  road("H", "L", 5),

  road("I", "G", 3),
  road("I", "J", 6),
  road("G", "J", 6.5),
  road("J", "K", 3),

  road("K", "J4", 2),
  road("J4", "L", 1),

  road("L", "M", 4),
  road("L", "N", 3),
  road("L", "O", 4),
  road("M", "O", 3),
  road("N", "O", 2),
  road("N", "P", 4),
  road("O", "P", 2),
];
