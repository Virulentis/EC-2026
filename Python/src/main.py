
from Python.src.classes import Edge, Node

SAFE_ELEVATION_METRES = 20

elevations: dict[str, float] = {
    "A": 45, "B": 12, "C": 60, "D": 35, "E": 55, "F": 18, "G": 70, "H": 40,
    "I": 5, "J": 8, "K": 50, "L": 25, "M": 15, "N": 4, "O": 6, "P": 3,
}

roads: list[tuple[str, str, float]] = [
    # Western spine
    ("A", "J1", 1),
    ("J1", "B", 0.5),
    ("J1", "C", 2),
    ("B", "C", 1.5),
    ("C", "D", 0.5),
    ("C", "E", 1),
    ("E", "G", 4),
    ("G", "K", 5),

    ("D", "J2", 3),
    ("J2", "J3", 2),
    ("J3", "J4", 4),

    ("E", "J2", 2),
    ("J2", "F", 1),

    ("G", "J3", 2),
    ("J3", "H", 1),

    ("F", "H", 2),
    ("H", "L", 5),

    ("I", "G", 3),
    ("I", "J", 6),
    ("G", "J", 6.5),
    ("J", "K", 3),

    ("K", "J4", 2),
    ("J4", "L", 1),

    ("L", "M", 4),
    ("L", "N", 3),
    ("L", "O", 4),
    ("M", "O", 3),
    ("N", "O", 2),
    ("N", "P", 4),
    ("O", "P", 2),
]

nodes: dict[str, Node] = {name: Node(name, elevation, elevation >= SAFE_ELEVATION_METRES) for name, elevation in elevations.items()}
edges: list[Edge] = [Edge(f"{src}-{dst}", weight, nodes[src], nodes[dst]) for src, dst, weight in roads]

print("Nodes:")
for node in nodes.values():
    print(f"  {node.name}: elevation={node.elevation}, enabled={node.enabled}")

print("\nEdges:")
for edge in edges:
    print(f"  {edge.name}: weight={edge.weight}, from={edge.src.name}, to={edge.dst.name}")