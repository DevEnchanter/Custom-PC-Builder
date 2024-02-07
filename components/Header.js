
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    // Implement search functionality here
    console.log(`Searching for: ${searchTerm}`);
  };

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <span className="flex items-center cursor-pointer">
            <Image src="/logo.png" alt="Website Logo" width={50} height={50} />
            <span className="font-bold ml-2 text-xl">PC Builder</span>
          </span>
        </Link>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="flex">
          <input 
            type="text" 
            placeholder="Search parts..." 
            className="p-2 rounded-l"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" className="bg-blue-500 p-2 rounded-r">
            Search
          </button>
        </form>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/shop">
                <span className="cursor-pointer">Shop</span>
              </Link>
            </li>
            {/* Add more navigation items here */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
