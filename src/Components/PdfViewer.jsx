// src/Components/PdfViewer.jsx
import React from "react";

const PdfViewer = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <iframe
        src="/files/CV_Christian_Narvaez.pdf"
        width="100%"
        height="1000px"
        title="CV de Christian Narváez"
        style={{ border: "none" }}
      />
    </div>
  );
};

export default PdfViewer;
