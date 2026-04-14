"use client";

import { useState } from "react";

export default function PassportPhoto() {
  const [image, setImage] = useState(null);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>📸 Passport Photo Maker</h1>

      <input type="file" onChange={handleUpload} />

      {image && (
        <div style={{ marginTop: 20 }}>
          <img
            src={image}
            alt="preview"
            style={{
              width: 200,
              height: 250,
              objectFit: "cover",
              border: "2px solid #000"
            }}
          />

          <div style={{ marginTop: 10 }}>
            <a href={image} download="passport-photo.jpg">
              <button>Download Photo</button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
