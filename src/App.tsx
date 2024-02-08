import { Canvas, useThree } from "@react-three/fiber";
import "./App.css";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { BoardComponent } from "./components/board";
import "reactflow/dist/style.css";

function App() {
  return (
    <div className="grid grid-cols-2">
      <div id="canvas-container" className="h-screen w-full">
        <Canvas scene={{ background: new THREE.Color("rgb(66,66,66)") }}>
          <Camera />
          <perspectiveCamera position={new THREE.Vector3().set(20, 20, 20)} />
          <ambientLight intensity={1} />
          <OrbitControls />
          <mesh>
            <boxGeometry args={[10, 10, 10]} />
            <meshStandardMaterial />
          </mesh>
        </Canvas>
      </div>
      <div>
        <BoardComponent />
      </div>
    </div>
  );
}

export default App;

const Camera = () => {
  const { camera } = useThree();

  camera.position.set(20, 20, 20);

  return <camera />;
};
