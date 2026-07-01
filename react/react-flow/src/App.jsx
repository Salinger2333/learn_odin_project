import "./App.css";
import {
  Background,
  Controls,
  ReactFlow,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
} from "@xyflow/react";
import { initialNodes, initialEdges } from "./utils/initial";
import "@xyflow/react/dist/style.css";
import { useCallback, useState } from "react";

function App() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
  const onNodesChange = useCallback(
    (changes) =>
      setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
    [],
  );
  const onEdgesChange = useCallback(
    (changes) =>
      setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
    [],
  );
  const onConnect = useCallback(
    (changes) => setEdges((edgesSnapshot) => addEdge(changes, edgesSnapshot)),
    [],
  );
  return (
    <>
      <div id="flow-container" style={{ width: "100vw", height: "100vh" }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onEdgesChange={onEdgesChange}
          onNodesChange={onNodesChange}
          onConnect={onConnect}
        >
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    </>
  );
}

export default App;
