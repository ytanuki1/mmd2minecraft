import React, { useState } from "react";
import { saveAs } from "file-saver";
import JSZip from "jszip";

const ModelViewer = () => {
  const [file, setFile] = useState(null);

  const handleFileUpload = (event) => {
    setFile(event.target.files[0]);
  };

  const generateDataPack = () => {
    if (!file) return;
    
    const zip = new JSZip();
    zip.file("datapack/readme.txt", "MMD to Minecraft DataPack");
    
    zip.generateAsync({ type: "blob" }).then((content) => {
      saveAs(content, "MMD_DataPack.zip");
    });
  };

  return (
    <div>
      <input type="file" accept=".pmx" onChange={handleFileUpload} />
      <button onClick={generateDataPack}>データパックを生成</button>
    </div>
  );
};

export default ModelViewer;
