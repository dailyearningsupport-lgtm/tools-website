"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PassportForm() {
  const [image, setImage] = useState(null);
  const router = useRouter();

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const img = URL.createObjectURL(file);
      setImage(img);
    }
  };

  const handleSubmit = () => {
    if (!image) return alert("Upload image first");

    // image ko next page bhejna
    localStorage.setItem("passportImage", image);

    router.push("/passport/editor");
  };

  return (
    <div style={{ display: "flex", gap: 20, padding: 20 }}>

      {/* LEFT FORM */}
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

        <input placeholder="Number (1-36)" style={{ width: "100%" }} /><br /><br />

        <select style={{ width: "100%" }}>
          <option>A4 Sheet</option>
        </select><br /><br />

        <button onClick={handleSubmit}>Submit</button>
      </div>

      {/* RIGHT PREVIEW */}
      <div style={{ flex: 1 }}>
        <h3>Preview</h3>

        {image && (
          <img src={image} style={{ width: 200 }} />
        )}
      </div>

    </div>
  );
}
