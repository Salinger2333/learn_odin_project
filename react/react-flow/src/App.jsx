import "./App.css";
import { Background, Controls, ReactFlow } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import useStore from "./store/store";
import { useShallow } from "zustand/react/shallow";

const selector = (state) => ({
  nodes: state.state,
  edges: state.edges,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
});

function App() {
  const { nodes, edges, onNodesChange, onConnect, onEdgesChange } = useStore(
    useShallow(selector),
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
          fitView
          colorMode="system"
        >
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    </>
  );
}

export default App;
