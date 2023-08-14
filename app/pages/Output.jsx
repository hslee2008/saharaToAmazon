import React from "react";
import { View } from "react-native";
import Expo from "expo";
import { Scene, PerspectiveCamera } from "three";
import ExpoTHREE, { Renderer } from "expo-three";
import { ExpoWebGLRenderingContext, GLView } from "expo-gl";
import { StatusBar } from "expo-status-bar";

const Output = () => {
  const onContextCreate = async (gl: ExpoWebGLRenderingContext) => {
    // three.js implementation
    const scene = new Scene();
    const camera = new PerspectiveCamera(
      75,
      gl.drawingBufferWidth / gl.drawingBufferHeight,
      0.1,
      1000
    );
    gl.canvas = {
      width: gl.drawingBufferWidth,
      height: gl.drawingBufferHeight,
    };

    // set camera position
    camera.position.z = 5; // Move the camera away from the origin

    const renderer = new Renderer({ gl });
    renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);

    const render = () => {
      requestAnimationFrame(render);

      // Render the scene with the camera
      renderer.render(scene, camera);
      gl.endFrameEXP();
    };

    render();
  };

  return (
    <View style={{ flex: 1 }}>
      <GLView
        onContextCreate={onContextCreate}
        style={{ flex: 1 }} // Use flex: 1 to fill the entire available space
      />
    </View>
  );
};

export default Output;
