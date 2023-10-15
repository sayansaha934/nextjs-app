"use client"

import { useState } from "react";
const Contacts = () => {
  const [contacts, setContacts] = useState([
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Alice Smith' },
    { id: 3, name: 'Bob Johnson' },
    { id: 4, name: 'Charlie Brown' },
    { id: 5, name: 'David Davis' },
    { id: 6, name: 'Ella Williams' },
    { id: 7, name: 'Frank Miller' },
    { id: 8, name: 'George Wilson' },
    { id: 9, name: 'Helen Taylor' },
    { id: 10, name: 'Isaac Turner' }
  ]);


  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center  h-screen bg-orange-300">
      <h1 className="text-3xl font-bold mt-6 mb-6">Contacts</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        className="w-64 p-3 border border-gray-300 rounded mb-6 shadow-md"
        placeholder="Search Contacts"
      />

        <ul className="list-none p-0 m-0 text-center">
          {filteredContacts.map(contact => (
            <li key={contact.id} className="text-xl mb-4">{contact.name}</li>
          ))}
        </ul>

    </div> 
  );
};

export default Contacts;

