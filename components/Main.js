import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Main = () => {
  const [pcParts, setPcParts] = useState({
    cpu: '',
    motherboard: '',
    ram: '',
    storage: '',
    gpu: '',
    psu: '',
    case: '',
    // Add more parts as needed
  });

  const [allComponents, setAllComponents] = useState({
    cpus: [],
    motherboards: [],
    rams: [],
    storages: [],
    gpus: [],
    psus: [],
    cases: [],
    // Add more as needed
  });

  const [isLoading, setIsLoading] = useState(true);
  const [compatibilityMessage, setCompatibilityMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch('/api/components'); // Replace with your API endpoint
        const data = await res.json();
        setAllComponents(data);
      } catch (error) {
        console.error('Error fetching components:', error);
        // Handle error
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handlePartChange = (partType, value) => {
    setPcParts({ ...pcParts, [partType]: value });
    setCompatibilityMessage('');
  };

  const checkCompatibility = () => {
    // Implement your compatibility logic here
    // For now, just a placeholder message
    setCompatibilityMessage('Compatibility check completed. All parts are compatible.');
  };

  const renderPartSelector = (partType, label) => {
    return (
      <div className="mb-4">
        <label htmlFor={partType} className="block mb-2">{label}:</label>
        <select 
          id={partType} 
          className="p-2 border rounded"
          value={pcParts[partType]}
          onChange={(e) => handlePartChange(partType, e.target.value)}
        >
          <option value="">Select {label}</option>
          {allComponents[partType]?.map(part => (
            <option key={part.id} value={part.id}>{part.name}</option>
          ))}
        </select>
      </div>
    );
  };

  if (isLoading) {
    return <p>Loading components...</p>;
  }

  return (
    <main className="container mx-auto my-8 p-4">
      <h1 className="text-2xl font-bold mb-4">Build Your PC</h1>

      {/* PC Parts Selection */}
      <div>
        {renderPartSelector('cpu', 'CPU')}
        {renderPartSelector('motherboard', 'Motherboard')}
        {renderPartSelector('ram', 'RAM')}
        {renderPartSelector('storage', 'Storage')}
        {renderPartSelector('gpu', 'GPU')}
        {renderPartSelector('psu', 'PSU')}
        {renderPartSelector('case', 'Case')}
        {/* Add more selectors as needed */}
        
        {/* Compatibility Check Button */}
        <button 
          onClick={checkCompatibility} 
          className="bg-blue-500 text-white p-2 rounded mt-4"
        >
          Check Compatibility
        </button>

        {/* Compatibility Message */}
        {compatibilityMessage && (
          <div className="mt-4 p-4 bg-green-200 border border-green-400 text-green-700">
            {compatibilityMessage}
          </div>
        )}
      </div>

      {/* Link to Shop */}
      <div className="mt-8">
        <Link href="/shop">
          <span className="cursor-pointer underline text-blue-600 hover:text-blue-800">Visit Shop for Pricing</span>
        </Link>
      </div>
    </main>
  );
};

export default Main;
