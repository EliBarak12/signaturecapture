import React, { useState } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import SignaturePad from './SignaturePad.jsx';
const MainPage = () => {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [image, setImage] = useState(null);
  const sigCanvas = React.useRef({});

  const handleScanButtonClick = () => {
    
  };

  const handleFormSubmit = () => { 

  };

  const InputWithLabel = ({ label, value, onChange, placeholder }) => (
    <section className="my-8">
      <label htmlFor={label} className="text-lg mb-2 block">
        <span>{label}:</span>
      </label>
      <input
        type="text"
        id={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border rounded-lg p-2 w-1/2 mx-auto"
        placeholder={placeholder}
      />
    </section>
  );

  return (
    <div dir='rtl' className="bg-gray-100 min-h-screen">
      <header className="bg-blue-500 text-white p-4">
        <h1 className="text-3xl font-semibold">לקוח</h1>
      </header>
      <main className="container mx-auto p-4 rounded-lg shadow-md bg-white">
        <InputWithLabel
          label="שם"
          value={name}
          onChange={setName}
          placeholder="שם הלקוח"
        />
        <InputWithLabel
          label="מספר ת.ז"
          value={id}
          onChange={setId}
          placeholder="תעודת זהות"
        />
        <section className="my-8">
          <button
            onClick={handleScanButtonClick}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg"
          >
            סרוק תעודת זהות
          </button>
          {image && (
            <img src={image} alt="Scanned ID" className="mt-4 border rounded-lg w-full" />
          )}
        </section>
        <section className="my-8">
          <label htmlFor="signature" className="text-lg mb-2 block">
            :חתימה
            <SignatureCanvas
              ref={sigCanvas}
              canvasProps={{ className: 'border rounded-lg p-2 mx-auto', style: { width: '250px', height: '200px' } }}
              />
              <SignaturePad/>
          </label>
        </section>
        <button
          onClick={handleFormSubmit}
          className="bg-blue-500 text-white py-2 px-4 rounded-lg"
        >
          שמירת הטופס
        </button>
      </main>
      <footer className="bg-gray-700 text-white p-4 text-center rounded-b-lg">
      <p>&copy; . הקורקינטיה של ישי</p>
      </footer>
    </div>
  );
};

export default MainPage;
