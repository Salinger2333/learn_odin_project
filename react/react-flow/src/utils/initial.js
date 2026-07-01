export const initialNodes = [
  {
    id: "n1",
    type: "input",
    data: { label: "Input Node 1" },
    position: { x: 0, y: 0 },
  },
  {
    id: "n2",
    type: "output",
    data: { label: "Output Node 2" },
    position: { x: 100, y: 100 },
  },
];

export const initialEdges = [
  {
    id: "n1-n2",
    source: "n1",
    target: "n2",
    type: "smoothstep",
    label: "connect with",
  },
];
