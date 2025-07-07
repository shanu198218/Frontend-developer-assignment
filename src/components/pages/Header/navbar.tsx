import { useState } from 'react';
import logo from '../../../assets/images/icons/logo.png';
import { navItems } from 'utils/data';
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  RiCloseIcon,
  RiMenuIcon,
} from 'utils/icons';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMenu = () => setMobileOpen(!mobileOpen);

  return (
    <header className="bg-white shadow-sm">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex bg-blue-900 items-center space-x-2">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-6 text-sm">
          {navItems.map((item) => (
            <a key={item} href="#" className="hover:text-blue-800">
              {item}
            </a>
          ))}
        </nav>

        {/* Social Icons - Desktop */}
        <div className="hidden lg:flex space-x-4">
          <a href="#" className="text-primary hover:text-blue-800">
            <FacebookIcon className="w-6 h-6" />
          </a>
          <a href="#" className="text-primary hover:text-blue-800">
            <InstagramIcon className="w-6 h-6" />
          </a>
          <a href="#" className="text-primary hover:text-blue-800">
            <LinkedinIcon className="w-6 h-6" />
          </a>
        </div>

        <button className="lg:hidden text-blue-900" onClick={toggleMenu}>
          {mobileOpen ? (
            <RiCloseIcon className="w-6 h-6" />
          ) : (
            <RiMenuIcon className="w-6 h-6" />
          )}
        </button>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          mobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        } px-6`}
      >
        <nav className="flex flex-col space-y-3 text-sm pt-4">
          {navItems.map((item) => (
            <a key={item} href="#" className="hover:text-blue-800">
              {item}
            </a>
          ))}
        </nav>
        <div className="flex space-x-4 mt-4 pb-4">
          <a href="#" className="text-blue-900 hover:text-blue-800">
            <FacebookIcon className="w-6 h-6" />
          </a>
          <a href="#" className="text-blue-900 hover:text-blue-800">
            <InstagramIcon className="w-6 h-6" />
          </a>
          <a href="#" className="text-blue-900 hover:text-blue-800">
            <LinkedinIcon className="w-6 h-6" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
