from dataclasses import dataclass


@dataclass 
class Edge:
    name: str
    weight: float
    to: 'Node'
    from: 'Node'


@dataclass
class Node:
    name: str
    edges: list[Edge]
    elevation: float
    enabled: bool


