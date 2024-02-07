import React, { useState, useRef } from 'react';
import SignatureCanvas from 'react-signature-canvas';

const SignaturePad = () => {
  const [imageURL, setImageURL] = useState(null);
  const signatureRef = useRef();

  const handleClear = () => {
    signatureRef.current.clear();
    setImageURL(null);
  };

  const handleSave = () => {
    if (signatureRef.current.isEmpty()) {
      alert('Please provide a signature first!');
      return;
    }
    const dataURL = signatureRef.current.getTrimmedCanvas().toDataURL('image/png');
    setImageURL(dataURL);
  };

  return (
    <div>
      <SignatureCanvas ref={signatureRef} penColor="black" canvasProps={{ width: 400, height: 200, className: 'sigCanvas' }} />
      <div>
        <button onClick={handleClear}>Clear</button>
        <button onClick={handleSave}>Save</button>
      </div>
      {imageURL && <img src={imageURL} alt="Signature" />}
    </div>
  );
};

export default SignaturePad;
