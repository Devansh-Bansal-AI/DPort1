import { useEffect } from "react";

const NeonCursor = () => {
  useEffect(() => {
    let cleanup: any;

    const init = () => {
      const script = document.createElement("script");
      script.src = "https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js";
      script.type = "module";
      script.onload = () => {
        // @ts-ignore
        cleanup = window.neonCursor?.({
          el: document.body,
          shaderPoints: 12,
          curvePoints: 30,
          radius1: 4,
          radius2: 20,
        });
      };
      document.body.appendChild(script);
    };

    init();

    return () => cleanup && cleanup();
  }, []);

  return null;
};

export default NeonCursor;
