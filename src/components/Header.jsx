import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' }, // New
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-slate-900/95 backdrop-blur-md sticky top-0 z-50 shadow-lg">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-cyan-400 flex items-center">
          <span className="mr-2">🔌</span> Codox Technical
        </Link>
        
        <ul className={`md:flex space-x-8 ${mobileOpen ? 'flex flex-col absolute top-16 left-0 w-full bg-slate-900 p-4' : 'hidden md:flex'}`}>
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`hover:text-cyan-400 transition-colors py-2 ${
                  location.pathname === link.to ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-gray-300'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="md:ml-8">
            <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-cyan-700 transition-all">
              Get Quote
            </Link>
          </li>
        </ul>
        
        <button className="md:hidden text-cyan-400" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
    </header>
  );
}