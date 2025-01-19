import React from 'react';

function PdfViewer() {
    return (
        <iframe
    src={`${process.env.PUBLIC_URL}/files/CV_Christian_Narvaez.pdf`}
    title="CV Viewer"
    width="100%"
    height="100%"
    style={{ border: 'none' }}
/>

    );
}

export default PdfViewer;
