"use client";
import React, { useRef } from "react";
import QRCode from "react-qr-code";
import html2canvas from "html2canvas";

const QR = () => {
  const qrRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (!qrRef.current) return;

    const canvas = await html2canvas(qrRef.current, {
      useCORS: true,
      scale: 3, // High resolution
    });

    const dataUrl = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = "rda-qr-code.png";
    link.click();
  };

  return (
    <div className="text-center space-y-4 mt-20">
      <div
        ref={qrRef}
        className="relative w-44 h-44 bg-white p-2 shadow-lg rounded mx-auto"
      >
        <QRCode value="https://rdauctioneers.com" size={160} />

        {/* Overlayed Name */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="bg-white px-2 py-1 text-sm font-bold text-teal-700 rounded shadow">
            RDA
          </div>
        </div>
      </div>

      <button
        onClick={handleDownload}
        className="px-4 py-2 bg-teal-700 text-white rounded hover:bg-teal-800 transition"
      >
        Download QR Code
      </button>
    </div>
  );
};

export default QR;
