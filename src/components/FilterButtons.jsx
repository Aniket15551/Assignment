import React, { useState } from 'react';

const FilterButtons = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const handleClick = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <div className="p-4 flex space-x-4">
      <button
        onClick={() => handleClick('All')}
        className={`px-4 py-2 rounded-full ${activeFilter === 'All' ? 'bg-purple-500 text-white' : 'bg-gray-200 text-black'}`}
      >
        All
      </button>
      <button
        onClick={() => handleClick('Active')}
        className={`px-4 py-2 rounded-full ${activeFilter === 'Active' ? 'bg-purple-500 text-white' : 'bg-gray-200 text-black'}`}
      >
        Active
      </button>
      <button
        onClick={() => handleClick('Inactive')}
        className={`px-4 py-2 rounded-full ${activeFilter === 'Inactive' ? 'bg-purple-500 text-white' : 'bg-gray-200 text-black'}`}
      >
        Inactive
      </button>
    </div>
  );
};

export default FilterButtons;
