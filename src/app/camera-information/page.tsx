// src/app/camera-information/page.tsx
'use client';

import React from "react";

const CameraInformationPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-600 px-4">
      <div className="bg-black shadow-lg rounded-lg p-8 max-w-xl w-full">
        <h1 className="text-3xl font-bold mb-6 text-center text-white">
          📷 Camera Information
        </h1>
        <p className="text-white text-center mb-4">
          This page displays information about the security cameras monitored by SecureSight.
        </p>
        <ul className="list-disc pl-5 space-y-3 text-white">
          <li><strong>Camera 1</strong> – Location: Gun Threat, <span className="text-green-400 font-semibold">Active</span></li>
          <li><strong>Camera 2</strong> – Location: Unauthorised Access, <span className="text-green-400 font-semibold">Active</span></li>
          <li><strong>Camera 3</strong> – Location: Face Recognised, <span className="text-red-400 font-semibold">Inactive</span></li>
        </ul>
      </div>
    </div>
  );
};

export default CameraInformationPage;
