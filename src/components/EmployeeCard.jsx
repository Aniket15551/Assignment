import React from 'react';

// Import images from the assets folder
import john from '../assets/john.jpg';
import alex from '../assets/alex.jpg'
import fakhar from '../assets/fakhar.jpg'
import johnson from '../assets/johnson.jpg'

// Import other images as needed...

// Create a mapping of names to images
const imageMap = {
    "Johnson Wood": johnson, // Ensure 'johnson' is imported correctly
    "John Doe": john,        // Ensure 'john' is imported correctly
    "Fakhar Naveed": fakhar, // Ensure 'fakhar' is imported correctly
    "Alex Made": alex        // Ensure 'alex' is imported correctly
};
const EmployeeCard = ({ name, role, email }) => {
  // Get the image based on the name, or use a placeholder if not found
  const imageSrc = imageMap[name] || 'https://via.placeholder.com/100'; // Fallback image

  return (
    <div className="bg-slate-300 shadow rounded-lg p-4 m-2">
    <div className='flex items-center gap-2'> {/* Changed from justify-around to items-center and reduced gap */}
        <img
            src={imageSrc}
            alt={name}
            className="w-14 h-14 rounded-full"
        />
        <div className='flex flex-col'>
            <h3 className="font-extrabold">{name}</h3>
            <p className="text-gray-500">{role}</p>
            <p className="text-gray-500 text-sm mt-4">Email:   {email}</p>
        </div>
    </div>

    <div className="mt-8 flex justify-center space-x-2"> {/* Added flex and justify-center for centering buttons */}
        <button className="bg-gray-200 text-black px-4 py-2 rounded">Block</button>
        <button className="bg-gray-800 text-white px-4 py-2 rounded">Details</button>
    </div>
</div>
  );
};

export default EmployeeCard;