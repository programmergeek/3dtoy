import { Canvas } from "@react-three/fiber";
import "./App.css";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function App() {
  return (
    <div className="grid grid-cols-2">
      <div id="canvas-container" className="h-screen w-full">
        <Canvas scene={{ background: new THREE.Color("rgb(66,66,66)") }}>
          <perspectiveCamera />
          <ambientLight intensity={1} />
          <OrbitControls />
          <mesh>
            <boxGeometry args={[10, 10, 10]} />
            <meshStandardMaterial />
          </mesh>
        </Canvas>
      </div>
    </div>
  );
}

export default App;
