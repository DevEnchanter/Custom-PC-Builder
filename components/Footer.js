import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto text-center">
        {/* Footer Content */}
        <p>© {new Date().getFullYear()} PC Builder. All rights reserved.</p>

        {/* Additional Footer Links */}
        <div className="mt-4">
          <Link href="/about">
            <span className="cursor-pointer hover:text-gray-300">About Us</span>
          </Link>
          {/* Add more links as needed */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
