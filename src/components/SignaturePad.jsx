import React, { useState, useRef } from 'react';
import SignatureCanvas from 'react-signature-canvas';

const SignaturePad = ({imageURL,setImageURL}) => {
//   const [imageURL, setImageURL] = useState(null);
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
        <div className=' border-slate-900'>
      <SignatureCanvas  ref={signatureRef}
              canvasProps={{ className: 'border rounded-lg p-2 mx-auto', style: { width: '250px', height: '200px' } }}/>
      </div>
      <div>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg m-4" onClick={handleClear}>נקה</button>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg" onClick={handleSave}>שמור</button>
      </div>
      
    </div>
  );
};

export default SignaturePad;
