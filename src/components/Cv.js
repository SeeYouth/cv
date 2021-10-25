import React from 'react';
import PdfCv from '../sass/assets/CV.pdf'

const Cv = () => {
    return (
        <iframe 
            className="view-pdf" 
            src={ PdfCv } 
            type="application/pdf" 
            title="CV de Julien Froger"
        />
    );
};

export default Cv;