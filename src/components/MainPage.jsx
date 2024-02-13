import React, { useState } from 'react';
import SignaturePad from './SignaturePad.jsx';
import StringToPdfConverter from './StringToPdfConverter.jsx';
import IDCardScanner from './IDCardScanner.jsx';
const MainPage = () => {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [image, setImage] = useState(null);
  const [phone,setPhone] = useState("")
  const [skoterCode, setScoterCode] = useState("")
  const sigCanvas = React.useRef({});

  const [isScannerOpen, setIsScannerOpen] = useState(false);
  const [capturedImageData, setCapturedImageData] = useState(null);

  const handleOpenScanner = () => {
    setIsScannerOpen(true);
  };

  const handleCloseScanner = () => {
    setIsScannerOpen(false);
    setCapturedImageData(null);
  };

  const handleSaveImage = () => {

    console.log("Image saved:", capturedImageData);
    setIsScannerOpen(false);
  };

  const handleRetakePhoto = () => {
    setCapturedImageData(null);
  };




  const handleFormSubmit = () => { 

  };



  return (
    <div dir='rtl' className="bg-gray-100 min-h-screen">
      <header className="bg-blue-500 text-white p-4">
        <h1 className="text-3xl font-semibold">לקוח</h1>
      </header>
      <main className="container mx-auto p-4 rounded-lg shadow-md bg-white">
        <div className='flex flex-col items-center m-4'>
      <input
        type="text"
        id="שם"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border rounded-lg p-2 w-1/2 mx-auto"
        placeholder="שם הלקוח"
      />
       <input 
        type="text"
        id="מספר ת.ז"
        value={id}
        onChange={(e) => setId(e.target.value)}
        className="border rounded-lg p-2 w-1/2 mx-auto mt-6"
        placeholder="תעודת זהות"
      />
      <input 
        type="text"
        id="מספר טלפון"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="border rounded-lg p-2 w-1/2 mx-auto mt-6"
        placeholder="מספר טלפון"
      />
       <input 
        type="text"
        id="מספר קורקינט"
        value={skoterCode}
        onChange={(e) => setScoterCode(e.target.value)}
        className="border rounded-lg p-2 w-1/2 mx-auto mt-6"
        placeholder="מספר קורקינט"
      />
     
       </div>
       
        <section className="my-8">
        {isScannerOpen ? (
          <IDCardScanner
            onCloseScanner={handleCloseScanner}
            onCaptureImage={(imageData) => setCapturedImageData(imageData)}
          />
        ) : (
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg" onClick={handleOpenScanner}>פתח מצלמה</button>
        )}

        {capturedImageData && (
          <div>
            <img src={capturedImageData} alt="Captured" style={{ maxWidth: '100%' }} />
            <button onClick={handleSaveImage}>Save Image</button>
            <button onClick={handleRetakePhoto}>Retake Photo</button>
            <button onClick={handleCloseScanner}>Close Scanner</button>
          </div>
        )}
{/* 
          <button
            onClick={handleScanButtonClick}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg"
          >
            סרוק תעודת זהות
          </button>
          {image && (
            <img src={image} alt="Scanned ID" className="mt-4 border rounded-lg w-full" />
          )} */}
        </section>
        <section dir='rtl' className="my-8">
          <label htmlFor="signature" className="text-lg mb-2 block">
         חתימה :
          
              <SignaturePad setImageURL={setImage} imageURL={image} />
          </label>
        </section>
        <div className=' flex justify-center'>
        <StringToPdfConverter  name={name} id={id} signatureImageURL={image} imageData={capturedImageData} skoterCode={skoterCode} phone={phone}/>
        </div>
       
        
      </main>
      <footer className="bg-gray-700 text-white p-4 text-center rounded-b-lg">
      <p>&copy; . הקורקינטיה של ישי</p>
      </footer>
    </div>
  );
};

export default MainPage;
