import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import FilterButtons from './components/FilterButtons';
import EmployeeCard from './components/EmployeeCard';
import Profile from './components/Profile';

function App() {
  const employees = [
    { name: 'Johnson Wood', role: 'Front End Developer', email: 'johnsonwood@microsoft.com' },
    { name: 'John Doe', role: 'Team Lead', email: 'johndoe@microsoft.com' },
    { name: 'Fakhar Naveed', role: 'UI/UX Designer', email: 'fakhar@microsoft.com' },
    { name: 'Alex Made', role: 'Front End Developer', email: 'alexmade@microsoft.com' },
    { name: 'Johnson Wood', role: 'Front End Developer', email: 'johnsonwood@microsoft.com' },
    { name: 'John Doe', role: 'Team Lead', email: 'johndoe@microsoft.com' },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredEmployees, setFilteredEmployees] = useState(employees);

  useEffect(() => {
    const results = employees.filter(employee =>
      employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredEmployees(results);
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <div className="flex flex-col w-full max-w-6xl mx-auto mt-4 px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          {/* SearchBar and Profile */}
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <Profile />
        </div>

        <div className="mt-6 mb-2 flex justify-between items-baseline">
          <h1 className="text-2xl font-bold">Employees</h1>
          <FilterButtons />
        </div>

        {/* Employee Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {filteredEmployees.map((employee, index) => (
            <EmployeeCard
              key={index}
              name={employee.name}
              role={employee.role}
              email={employee.email}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;



