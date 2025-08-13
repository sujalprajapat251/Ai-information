import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import BIRDS from "vanta/dist/vanta.birds.min";

export default function Demo() {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      if (!vantaEffect.current) {
        vantaEffect.current = BIRDS({
          el: vantaRef.current,
          THREE: THREE, // ✅ Make sure to pass the THREE object
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: 0x0f0f0f,
          color1: 0xff9900,
          color2: 0xff0000,
          quantity: 4,
          time: 5,
        });
      }

      return () => {
        if (vantaEffect.current) {
          vantaEffect.current.destroy();
          vantaEffect.current = null;
        }
      };
    }, 1000);
  }, [vantaEffect]);

  return (
    <div
      ref={vantaRef}
      style={{
        width: "100%",
        height: "100vh",
        margin: 0,
        padding: 0,
        overflow: "hidden",
      }}
    />
  );
}
