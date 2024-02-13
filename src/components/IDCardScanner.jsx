import React, { useRef, useState, useEffect } from 'react';

function IDCardScanner({ onCloseScanner, onCaptureImage }) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [capturedImageData, setCapturedImageData] = useState(null);
  const [isCapturing, setIsCapturing] = useState(false);

  useEffect(() => {
    startCamera();
    return () => stopCamera();
  }, []);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.error('Error accessing camera:', err);
    }
  };

  const stopCamera = () => {
    const stream = videoRef.current?.srcObject;
    if (stream) {
      const tracks = stream.getTracks();
      tracks.forEach(track => {
        track.stop();
      });
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
  };

  const captureImage = () => {
    setIsCapturing(true);
    if (!videoRef.current || !canvasRef.current) return;
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // Set canvas dimensions to match video frame dimensions
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    const imageData = canvas.toDataURL('image/png');
    
    // Set the captured image data in state
    setCapturedImageData(imageData);
    onCaptureImage(imageData);
  };

  const retakePhoto = () => {
    setIsCapturing(false);
    setCapturedImageData(null);
  };

  return (
    <div>
      {isCapturing ? (
        <div>
          
          <br />
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg m-4" onClick={retakePhoto}>צלם שוב</button>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg" onClick={onCloseScanner}>סגור מצלמה</button>
        </div>
      ) : (
        <div>
          <video ref={videoRef} autoPlay playsInline style={{ maxWidth: '100%' }} />
          <br />
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg" onClick={captureImage}>צלם</button>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg" onClick={onCloseScanner}>סגור מצלמה</button>
        </div>
      )}
      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </div>
  );
}

export default IDCardScanner;