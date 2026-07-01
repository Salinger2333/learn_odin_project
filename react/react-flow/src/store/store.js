import { create } from "zustand";
import { initialEdges, initialNodes } from "../utils/initial";
import { addEdge, applyNodeChanges, applyEdgeChanges } from "@xyflow/react";

const useStore = create((set, get) => ({
  nodes: initialNodes,
  edges: initialEdges,
  onNodesChange: (changes) => {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    });
  },
  onEgdesChange: (changes) => {
    set({
      nodes: applyEdgeChanges(changes, get().edges),
    });
  },
  onConnect: (changes) => {
    set({
      edges: addEdge(changes, get().edges),
    });
  },
  setNodes: (nodes) => {
    set({ nodes });
  },
  setEdges: (edges) => {
    set({ edges });
  },
}));

export default useStore;
