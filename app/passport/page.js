"use client";

import { useState } from "react";
import jsPDF from "jspdf";

export default function PassportTool() {
  const [image, setImage] = useState(null);
  const [count, setCount] = useState(6);
  const [brightness, setBrightness] = useState(100);
  const [grayscale, setGrayscale] = useState(0);
  const [rotate, setRotate] = useState(0);
  const [flip, setFlip] = useState(false);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  // ✅ PDF DOWNLOAD FUNCTION (UPDATED)
  const downloadImage = () => {
    if (!image) return;

    const pdf = new jsPDF("p", "mm", "a4");

    const imgWidth = 35;
    const imgHeight = 45;

    let x = 10;
    let y = 10;

    for (let i = 0; i < count; i++) {
      pdf.addImage(image, "JPEG", x, y, imgWidth, imgHeight);

      x += imgWidth + 5;

      if (x > 170) {
        x = 10;
        y += imgHeight + 5;
      }
    }

    pdf.save("passport-photos.pdf");
  };

  return (
    <div style={{ display: "flex", gap: 20, padding: 20 }}>

      {/* LEFT PANEL */}
      <div style={{
        width: 300,
        border: "1px solid #ddd",
        padding: 15,
        borderRadius: 10
      }}>
        <h2>PASSPORT SIZE PHOTO</h2>

        <input type="file" onChange={handleUpload} /><br /><br />

        <input placeholder="Name" style={{ width: "100%" }} /><br /><br />
        <input placeholder="Date" style={{ width: "100%" }} /><br /><br />

        <input
          type="number"
          placeholder="Number (1-36)"
          value={count}
          onChange={(e) => setCount(e.target.value)}
          style={{ width: "100%" }}
        /><br /><br />

        <select style={{ width: "100%" }}>
          <option>A4 Sheet</option>
          <option>4x6</option>
        </select>

        <hr />

        {/* IMAGE CONTROLS */}
        <label>Brightness</label>
        <input
          type="range"
          min="50"
          max="150"
          value={brightness}
          onChange={(e) => setBrightness(e.target.value)}
        />

        <label>Grayscale</label>
        <input
          type="range"
          min="0"
          max="100"
          value={grayscale}
          onChange={(e) => setGrayscale(e.target.value)}
        />

        <br /><br />

        <button onClick={() => setRotate(rotate + 90)}>Rotate</button>
        <button onClick={() => setFlip(!flip)}>Flip</button>

        <br /><br />

        {/* DOWNLOAD BUTTON */}
        <button onClick={downloadImage} style={{ width: "100%" }}>
          Download PDF
        </button>
      </div>

      {/* RIGHT PANEL */}
      <div style={{ flex: 1 }}>
        <h3>A4 Preview</h3>

        <div style={{
          background: "#ddd",
          padding: 20,
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 10
        }}>
          {image &&
            Array.from({ length: count }).map((_, i) => (
              <img
                key={i}
                src={image}
                style={{
                  width: "100%",
                  height: 120,
                  objectFit: "cover",
                  transform: `rotate(${rotate}deg) scaleX(${flip ? -1 : 1})`,
                  filter: `brightness(${brightness}%) grayscale(${grayscale}%)`,
                  border: "1px solid #000"
                }}
              />
            ))}
        </div>
      </div>

    </div>
  );
}
