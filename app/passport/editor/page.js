"use client";

import { useEffect, useState } from "react";

export default function Editor() {
  const [image, setImage] = useState(null);
  const [brightness, setBrightness] = useState(100);
  const [saturation, setSaturation] = useState(100);
  const [grayscale, setGrayscale] = useState(0);
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const img = localStorage.getItem("passportImage");
    if (img) setImage(img);
  }, []);

  return (
    <div style={{ display: "flex", padding: 20, gap: 20 }}>

      {/* IMAGE */}
      <div style={{ flex: 1 }}>
        {image && (
          <img
            src={image}
            style={{
              width: "100%",
              maxWidth: 400,
              filter: `
                brightness(${brightness}%)
                saturate(${saturation}%)
                grayscale(${grayscale}%)
              `,
              transform: `rotate(${rotate}deg)`
            }}
          />
        )}
      </div>

      {/* CONTROLS */}
      <div style={{ width: 250 }}>
        <h3>Controls</h3>

        <label>Brightness</label>
        <input type="range" min="50" max="150"
          value={brightness}
          onChange={(e) => setBrightness(e.target.value)} />

        <label>Saturation</label>
        <input type="range" min="50" max="150"
          value={saturation}
          onChange={(e) => setSaturation(e.target.value)} />

        <label>Grayscale</label>
        <input type="range" min="0" max="100"
          value={grayscale}
          onChange={(e) => setGrayscale(e.target.value)} />

        <br /><br />

        <button onClick={() => setRotate(rotate + 90)}>Rotate</button>

      </div>

    </div>
  );
}
